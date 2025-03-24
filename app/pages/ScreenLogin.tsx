import Buttons from "@/components/buttons";
import Input from "@/components/input";
import { Alert, StyleSheet, Text, View } from "react-native";
import { UseUsersDatabase } from "../database/useUsersDatabase";
import { useEffect, useState } from "react";

function ScreenLogin({ navigation }) {
    const [cpf, setCPF] = useState('')

    const userDatabase = UseUsersDatabase()

    async function ValidarCPF() {
        try {
            const result = await userDatabase.validateCPF(cpf)
            if (result.length > 0) {
                navigation.navigate('ProfileUsers', {user: result[0]})
            } else if (cpf === '') {
                Alert.alert('Preencha o campo CPF')
            } else {
                Alert.alert('Atenção', 'Usuário Invalido')
            }
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        return () => {
        };
    }, []);

    return (
        <View style={{ flex: 1 }}>
            <View style={[{ flex: 1 }, style.container]}>
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={style.textlogar}>Preencha para fazer Login</Text>
                    <Input placeholder="Seu CPF" onChangeText={(cpf) => setCPF(cpf)} />
                    <Buttons
                        title='Entrar'
                        bgColor='#75239d'
                        customClick={ValidarCPF}
                    />
                </View>
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        backgroundColor: '#9904a6',
        margin: 15,
        marginTop: '50%',
        marginBottom: '50%',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 1,
    },
    textlogar: {
        fontSize: 25,
        padding: 20,
        color: '#eee'
    }
})

export default ScreenLogin