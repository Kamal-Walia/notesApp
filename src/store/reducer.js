
const initialState = {
  isLoggedIn: false,
  user:{},
  notes: {}
}

const notesAppReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN':
      return { ...state, isLoggedIn: action.payload, user: action.user }
    case 'HANDLE_NOTES':
      return { ...state, notes: action.payload }
    case 'EDIT_NOTE':
      return { ...state, isLoggedIn: action.payload }
    default:
      return state
  }
}

export default notesAppReducer;