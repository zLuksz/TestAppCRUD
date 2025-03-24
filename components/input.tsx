import { TextInput, TextInputProps, StyleSheet, View } from "react-native";

export default function Input({ ...rest }: TextInputProps) {
    return (
        <View>
            <TextInput style={style.input} placeholderTextColor="#888" {...rest} />
        </View>
    )
}

const style = StyleSheet.create({
    input: {
        width: 300,
        borderWidth: 1,
        borderColor: '#000',
        borderRadius: 10,
        padding: 10,
        fontSize: 19,
        margin: 11,
        backgroundColor: '#eee',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 1,
    }
})