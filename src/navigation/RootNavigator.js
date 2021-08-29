import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { connect } from 'react-redux';
import Login from '../screens/LoginScreen';
import NotesScreen from '../screens/NotesScreen';
import EditNoteScreen from '../screens/EditNoteScreen'
import AddNoteScreen from '../screens/AddNoteScreen'

const Stack = createNativeStackNavigator();

const RootNavigator = ({ isLoggedIn }) => {
    return (
        <Stack.Navigator>
            {!isLoggedIn ? <Stack.Screen name="Login" component={Login} /> :
                <>
                    <Stack.Screen name="NotesScreen" component={NotesScreen} />
                    <Stack.Screen name="EditNote" component={EditNoteScreen} />
                    <Stack.Screen name="AddNoteScreen" component={AddNoteScreen} />
                </>
            }
        </Stack.Navigator>
    )
}

const mapStateToProps = (state) => ({
    isLoggedIn: state.notesApp.isLoggedIn
})

const mapDispatchToProps = {}
export default connect(mapStateToProps, mapDispatchToProps)(RootNavigator);