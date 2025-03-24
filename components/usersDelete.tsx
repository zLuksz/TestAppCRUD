import { Pressable, PressableProps, StyleSheet, Text, TouchableOpacity } from "react-native";
import { Ionicons } from '@expo/vector-icons'

type Props = PressableProps & {
    data: {
        name: string
        endereco: string
        numero: number
        idade: number
        cpf: string
    }
    onDelete: () => void
}

export default function UsersDelete({ data, onDelete, ...rest }: Props) {
    return <Pressable {...rest} style={style.card}>
        <TouchableOpacity style={style.touchDelete} onPress={onDelete}>
            <Ionicons name="trash-sharp" style={style.exlcusao} />
        </TouchableOpacity>
        <Text style={style.textCard}>
            Nome: {data.name}
        </Text>
        <Text style={style.textCard}>
            CPF: {data.cpf}
        </Text>
        <Text style={style.textCard}>
            Idade: {data.idade}
        </Text>
        <Text style={style.textCard}>
            Número: {data.numero}
        </Text>
        <Text style={style.textCard}>
            Endereço: {data.endereco}
        </Text>
    </Pressable>
}


const style = StyleSheet.create({
    card: {
        backgroundColor: '#ab451a',
        width: 300,
        margin: 10,
        padding: 10,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 3,
    },
    textCard: {
        fontSize: 19,
        color: '#fff',
        margin: 2
    },
    touchDelete: {
        zIndex:1,
        padding: 10,
        top: 100
    },
    exlcusao: {
        textAlign: 'center',
        position: 'absolute',
        fontSize: 100,
        width: '107%',
        maxHeight: '150%',
        borderRadius: 10,
        paddingBottom: 50,
        padding: 5,
        opacity: 0.9,
        backgroundColor: '#eee',
        color: '#a50028',
    }
})