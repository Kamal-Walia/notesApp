const handleLogin = (value) => {
    return {
      type: 'LOGIN',
      payload: value
    };
  }

  const handleDeleteNote = (id) => {
    return (dispatch, getState) => {
      const notes = getState().notesApp.notes
      const noteToBeDeleted = notes.findIndex(note => note.id === id)
      if (noteToBeDeleted > -1) {
        notes.splice(noteToBeDeleted,1)
        dispatch(handleNotes([...notes]))
      }
    }
  }

  const handleCreateNote = (newNote) => {
    return (dispatch, getState) => {
    const notes = getState().notesApp.notes
    const updatedNotes = [...notes, newNote]
    dispatch(handleNotes(updatedNotes))
    }
  }

  const handleEditNote = (notes) => {
    return (dispatch) => {
      dispatch(handleNotes(notes))
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
    handleEditNote
  }