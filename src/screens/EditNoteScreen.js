import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import { connect } from 'react-redux';
import SuggestionList from '../components/sharedComponents/SuggestionList'
import actions from '../store/actions'

const EditNoteScreen = ({route, navigation, notes, handleEditNote}) => {
    const { noteId } = route.params;
    const [note, setNote] = useState(notes[noteId].note)
    
    const handleSaveNote = () => {
        notes[noteId].note = note
        const updatedNote = notes[noteId]
        handleEditNote(noteId, updatedNote)
        navigation.navigate('NotesScreen')
    }

    const handleUserInput = (text) => {
        setNote(text)
    }


    return (
        <View style={{flex:1, backgroundColor:'white'}}>
            <View style={{height:100, borderWidth:1}}>
            <TextInput
                multiline={true}
                numberOfLines={4}
                onChangeText={(text) => handleUserInput(text)}
                value={note} />
                </View>
             <SuggestionList note={note} setNote={setNote}/>
            <View style={{bottom:20, alignSelf:'flex-end', right:20, flex:1, position:'absolute'}}>
            <TouchableOpacity style={{padding:12, borderWidth:1, borderRadius:6, }} onPress={handleSaveNote}>
                <Text style={{fontSize:18}}>Save Note</Text>
            </TouchableOpacity>
            </View>
        </View>

    )
}

const mapStateToProps = (state) => ({
    notes: state.notesApp.notes
})

const mapDispatchToProps = {
    handleEditNote: actions.handleEditNote
}

export default connect(mapStateToProps, mapDispatchToProps)(EditNoteScreen);
