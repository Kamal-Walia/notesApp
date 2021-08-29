
const initialState = {
  isLoggedIn: false,
  notes: [{ note: 'hello', id: 0 }, { note: 'worlkmnkkd', id: 1 }, { note: 'test', id: 2 }]
}

const notesAppReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN':
      return { ...state, isLoggedIn: action.payload }
    case 'HANDLE_NOTES':
      return { ...state, notes: action.payload }
    case 'EDIT_NOTE':
      return { ...state, isLoggedIn: action.payload }
    default:
      return state
  }
}

export default notesAppReducer;