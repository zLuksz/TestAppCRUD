import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons'

const Buttons = (props) => {
    return (
        <TouchableOpacity style={[styles.button, {backgroundColor: props.bgColor}]} onPress={props.customClick}>
            <Ionicons name={props.icon} size={30} style={styles.icons}></Ionicons>
            <Text style={styles.text}>{props.title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        marginTop: 20,
        marginLeft: 50,
        marginRight: 50,
        padding: 20,
        borderRadius: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 1,
    },
    text: {
        color: '#fff',
        fontSize: 19
    },
    icons: {
        color: '#fff',
        position: 'absolute',
        left: 25,
        top: 16
    }
})

export default Buttons