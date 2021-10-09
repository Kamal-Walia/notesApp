import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';

const suggestions = ['Hello World, my name is Kamal', 'My interview is scheduled with urbanPiper at 2:00', 'Hello World, my name is']

const SuggestionList = ({ note, setNote }) => {
    const [userSuggestions, setUserSuggestions] = useState([])

    useEffect(() => {
        if (note) {
            const userSuggestions = suggestions.filter(item => item.includes(note))
            const isUserTypedSuggestion = userSuggestions.find((item => item === note))
            if (isUserTypedSuggestion) {
                setUserSuggestions([])
            } else {
                setUserSuggestions(userSuggestions)
            }
        }
    }, [note])

    const handleUserSuggestion = (item) => {
        setNote(item)
        setUserSuggestions([])
    }

    const renderItem = ({ item }) => {
        return (<TouchableOpacity onPress={() => handleUserSuggestion(item)}>
            <Text>{item}</Text>
        </TouchableOpacity>)
    }
    return (
        <View style={{ borderWidth: 1 }}>
            {userSuggestions.length && note ?
                <FlatList
                    data={userSuggestions}
                    renderItem={renderItem}
                    keyExtractor={item => `${item}`}
                />
                : null}
        </View>
    )

}

export default SuggestionList

