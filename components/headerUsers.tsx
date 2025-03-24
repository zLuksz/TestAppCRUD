import React from 'react';
import { Ionicons } from "@expo/vector-icons";
import { Platform, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Header({ navigation, logoutUsers }) {
    const logoutUser = () => {
        if (logoutUsers) logoutUsers()
            navigation.reset({
                index: 0,
                routes: [{ name: 'Registro de Usuários'}]
            })
    }

    return (
        <View style={style.header}>
            <View style={style.headerObjects}>
                <TouchableOpacity onPress={logoutUser}>
                    <Ionicons name="exit" size={50} style={style.icons} />
                </TouchableOpacity>
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    header: {
        backgroundColor: '#75239d',
        height: Platform.select({
            android: 65,
            ios: 91
        }),
        justifyContent: 'center',
        alignItems: 'flex-end',
        width: '100%'
    },
    headerObjects: {
        top: Platform.select({
            android: 0,
            ios: 20
        }),
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        elevation: 10
    },
    icons: {
        color: '#e7ef00',
        margin: 15,
    }
})