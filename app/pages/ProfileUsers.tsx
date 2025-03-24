import Header from "@/components/headerUsers"
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import * as ImagePicker from 'expo-image-picker';
import { useState } from "react";
import { Ionicons } from "@expo/vector-icons";

function ProfileUsers({ navigation, route }) {
    const { user } = route.params
    const [image, setImage] = useState<string | null>(null)

    const SaveImage = async () => {
        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ['images'],
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1
        })

        console.log(result)

        if (!result.canceled) {
            setImage(result.assets[0].uri)
        }
    }


    return (
        <View style={{ flex: 1 }}>
            <Header navigation={navigation} />
            <TouchableOpacity style={style.photoProfile} onPress={SaveImage}>
                <Ionicons name="add-circle-sharp" size={55} style={{color: '#e7ef00'}} />
            </TouchableOpacity>
            {image && <Image source={{ uri: image }} style={style.image} />}
            <View style={{ flex: 1 }}>
                <Text style={style.textWelcome}>Boas Vindas</Text>
                <Text style={style.textWelcome}>{user.name}</Text>
            </View>
        </View>
    )
}


export default ProfileUsers

const style = StyleSheet.create({
    textWelcome: {
        fontSize: 19,
        textAlign: 'center',
        marginTop: 20
    },
    main: {
        backgroundColor: '#a0a0a0',
        margin: 20,
        padding: 20,
        borderRadius: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 2,
    },
    photoProfile: {
        position: 'absolute',
        top: Platform.select({
            android: 5,
            ios: 35
        }),
        marginLeft: 10
    },
    image: {
        width: 50,
        height: 50,
        position: 'absolute',
        top: Platform.select({
            android: 5,
            ios: 35
        }),
        borderRadius: 50,
        margin: 5,
        marginLeft: 13,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 1,
    }
})