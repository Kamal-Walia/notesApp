import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import { combineReducers } from 'redux';
import { persistStore, persistReducer } from 'redux-persist'
import AsyncStorage from '@react-native-async-storage/async-storage';
import notesAppReducer from './reducer'

const persistConfig = {
    key: 'root',
    storage:AsyncStorage,
  }

const reducer = combineReducers({
    notesApp:notesAppReducer
   })

const persistedReducer = persistReducer(persistConfig, reducer)
const store = createStore(persistedReducer, applyMiddleware(thunk))
const persistor = persistStore(store)

export {store, persistor};