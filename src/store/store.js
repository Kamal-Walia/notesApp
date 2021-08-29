import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import { combineReducers } from 'redux';
import notesAppReducer from './reducer'

const reducer = combineReducers({
    notesApp:notesAppReducer
   })

const store = createStore(reducer, applyMiddleware(thunk))

export default store;