import auth from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import database from '@react-native-firebase/database';

const onGoogleButtonPress = () => {
  return async (dispatch, getState) => {
    // Get the users ID token
    const { idToken } = await GoogleSignin.signIn();

    // Create a Google credential with the token
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);

    // Sign-in the user with the credential
    return auth().signInWithCredential(googleCredential);
  }
}

const handleLogin = (value, user) => {
  return {
    type: 'LOGIN',
    payload: value,
    user
  };
}

const handleDeleteNote = (id) => {
  return (dispatch, getState) => {
    const uid = getState().notesApp.user.user.uid
    database().ref(`notes/${uid}`).child(id).remove();
    dispatch(handleGetUserNotes())
  }
}

const handleGetUserNotes = () => {
  return (dispatch, getState) => {
  const uid = getState().notesApp.user.user.uid
  database()
  .ref(`notes/${uid}`)
  .once('value')
  .then(snapshot => {
    dispatch(handleNotes(snapshot.val()))
  });
}
}

const handleCreateNote = (newNote) => {
  return (dispatch, getState) => {
    const uid = getState().notesApp.user.user.uid
    database().ref(`notes/${uid}`).push({...newNote})
    dispatch(handleGetUserNotes())
  }
}

  const handleEditNote = (id, updates) => {
    return (dispatch, getState) => {
      const uid = getState().notesApp.user.user.uid
      database().ref(`notes/${uid}`).child(id).update(updates)
      dispatch(handleGetUserNotes())
    }
  }

  const handleNotes = (notes) => {
    return {
      type: 'HANDLE_NOTES',
      payload: notes
    };
  }

  export default {
    handleLogin,
    handleDeleteNote,
    handleCreateNote,
    handleEditNote,
    onGoogleButtonPress,
    handleGetUserNotes
  }