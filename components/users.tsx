import { Pressable, PressableProps, StyleSheet, Text } from "react-native";
import { Ionicons } from '@expo/vector-icons'

type Props = PressableProps & {
    data: {
        name: string
        endereco: string
        numero: number
        idade: number
        cpf: string
    }
}

export default function Users({data, ...rest}: Props){ 
    return <Pressable {...rest} style={style.card}>
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
})