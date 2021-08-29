import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import { connect } from 'react-redux';
import actions from '../store/actions'

const NotesScreen = ({ navigation, notes, handleDeleteNote }) => {

  const handleEditNote = (noteId) => {
    navigation.navigate('EditNote', { noteId })
  }

  const handleCreateNote = () => {
    navigation.navigate('AddNoteScreen')
  }

  return (
    <View style={{flex:1, padding:10}}>
      <FlatList
        data={notes}
        renderItem={({ item }) => {
          return (
            <View style={{padding:20, borderWidth:1, borderRadius:8, margin:10}}>
              <Text style={{maxWidth:"80%", marginVertical:10}} numberOfLines={1} ellipsizeMode='tail'>{item.note}</Text>
              <View style={{bottom:0, alignSelf:'flex-end', flexDirection:'row'}}>
              <TouchableOpacity style={{margin:2}} onPress={() => handleEditNote(item.id)}>
                <Text>Edit Note</Text>
              </TouchableOpacity>
              <TouchableOpacity style={{margin:2}} onPress={() => handleDeleteNote(item.id)}>
                <Text>Delete Note</Text>
              </TouchableOpacity>
              </View>
            </View>
          )
        }}
        keyExtractor={item => item.id}
      />
      <View style={{bottom:40, right:20, alignSelf:'flex-end'}}>
      <TouchableOpacity style={{padding:12, borderWidth:1, borderRadius:6, }} onPress={handleCreateNote}>
        <Text style={{fontSize:18}}>Create Note</Text>
      </TouchableOpacity>
      </View>
     
    </View>

  )
}

const mapStateToProps = (state) => ({
  isLoggedIn: state.notesApp.isLoggedIn,
  notes: state.notesApp.notes
})

const mapDispatchToProps = {
  handleLogin: actions.handleLogin,
  handleDeleteNote: actions.handleDeleteNote,
}

export default connect(mapStateToProps, mapDispatchToProps)(NotesScreen);
