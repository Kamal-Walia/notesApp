import React from 'react';
import { View, Text, TouchableOpacity, Alert } from 'react-native';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { connect } from 'react-redux';
import actions from '../store/actions'

GoogleSignin.configure({
  webClientId: '1014094338472-m25ikse9pkp4ag3vrt0lm9nuddp87tch.apps.googleusercontent.com',
  databaseURL:'https://notesapp-14bdb-default-rtdb.firebaseio.com/'
});


const Login = ({ handleLogin, onGoogleButtonPress }) => {
  const handleUserLogin = () => {
    onGoogleButtonPress().then((user) =>  handleLogin(true, user)).catch(err => {
      Alert.alert('Some error occured')
    })
   
  }
  return (
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <TouchableOpacity onPress={handleUserLogin}>
              <Text>Google Login</Text>
            </TouchableOpacity>
          </View>
  );
};

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {
  onGoogleButtonPress: actions.onGoogleButtonPress,
  handleLogin: actions.handleLogin
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
