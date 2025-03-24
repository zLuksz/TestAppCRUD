import Buttons from "@/components/buttons";
import Input from "@/components/input";
import { useEffect, useState } from "react";
import { Alert, View } from "react-native";
import { UseUsersDatabase, UsersDataBase } from "../database/useUsersDatabase";


function AddUser() {
    const [name, setName] = useState('')
    const [search, setsearch] = useState('')
    const [endereco, setEndereco] = useState('')
    const [numero, setnumero] = useState('')
    const [idade, setIdade] = useState('')
    const [cpf, setCpf] = useState('')
    const [users, setUsers] = useState<UsersDataBase[]>([])

    const userDatabase = UseUsersDatabase()



    async function Create() {
        try {
            if (isNaN(Number(numero) && Number(idade))) {
                return Alert.alert('Telefone e Idade Precisam ser um numero!')
            }
            if ((name === '') || (endereco === '') || (numero === '') || (idade === '') || (cpf === '')) {
                Alert.alert('Todos os campos são obrigatórios!!!')
            } else {
                const response = await userDatabase.create({ name, endereco, numero: Number(numero), idade: Number(idade), cpf: String(cpf) })
                Alert.alert('Usuario Cadastrado com Sucesso!!!')
                setName('')
                setCpf('')
                setIdade('')
                setnumero('')
                setEndereco('')
            }

            List()

        } catch (error) {
            console.log(error)
        }
    }

    async function List() {
        try {
            const response = await userDatabase.searchByName(search)
            setUsers(response)

        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        List()
    }, [search])

    return (
        <View style={{ flex: 0, justifyContent: 'center', alignItems: 'center' }}>
            <Input placeholder="Seu Nome" onChangeText={setName} value={name} />
            <Input placeholder="Seu CPF" onChangeText={setCpf} value={cpf} />
            <Input placeholder="Seu Endereço" onChangeText={setEndereco} value={endereco} />
            <Input placeholder="Seu Telefone" onChangeText={setnumero} value={numero} />
            <Input placeholder="Sua Idade" onChangeText={setIdade} value={idade} />
            <Buttons
                title='Cadastrar'
                bgColor='#008775'
                customClick={Create}
            />

        </View>
    )
}

export default AddUser