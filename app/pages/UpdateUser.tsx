import Buttons from "@/components/buttons";
import Input from "@/components/input";
import { useEffect, useState } from "react";
import { Alert, View, FlatList, KeyboardAvoidingView, Platform } from "react-native";
import { UseUsersDatabase, UsersDataBase } from "../database/useUsersDatabase";
import Users from "@/components/users";


function UpdateUser() {
    const [id, setId] = useState('')
    const [name, setName] = useState('')
    const [search, setSearch] = useState('')
    const [endereco, setEndereco] = useState('')
    const [numero, setnumero] = useState('')
    const [idade, setIdade] = useState('')
    const [cpf, setCpf] = useState('')
    const [uri, setUri] = useState(null)
    const [refresh, setRefresh] = useState(false);
    const [users, setUsers] = useState<UsersDataBase[]>([])

    const userDatabase = UseUsersDatabase()

    async function UpdateUser() {
        try {
            if (isNaN(Number(numero) && Number(idade))) {
                return Alert.alert('Telefone e Idade Precisam ser um numero!')
            }
            if (!name || !endereco || !numero || !idade || !cpf) {
                Alert.alert('Todos os campos são obrigatórios!!!')
            } else {
                const response = await userDatabase.update({ id: Number(id), name, endereco, numero: Number(numero), idade: Number(idade), cpf, uri: String(uri) })
                setRefresh(!refresh);
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

    function DetailsUser(item: UsersDataBase) {
        setId(String(item.id))
        setName(item.name)
        setCpf(item.cpf)
        setIdade(String(item.idade))
        setnumero(String(item.numero))
        setEndereco(item.endereco)


    }

    async function HandleSave() {
        try {
            if (!name || !endereco || !numero || !idade || !cpf) {
                Alert.alert('Preencha todos os campos!!!')
            } else if (id) {
                await UpdateUser()
                Alert.alert('Usuário atualizado com sucesso!');
                setName('')
                setCpf('')
                setIdade('')
                setnumero('')
                setEndereco('')
            } else {
                Alert.alert('Somente Atualização! Selecione um usuário.');
                setName('')
                setCpf('')
                setIdade('')
                setnumero('')
                setEndereco('')
            }
        } catch (error) {
            console.error('Erro ao salvar:', error);
        }
    }

    useEffect(() => {
        if (search.trim()) {
            List()
        } else {
            setUsers([])
        }
    }, [search])

    return (
        <View style={{ flex: 1, alignItems: 'center' }}>
            <KeyboardAvoidingView style={{ flex: 1 }}
                behavior={Platform.OS === "ios" ? "padding" : undefined}>
                <FlatList
                    data={users}
                    keyExtractor={(item) => String(item.id)}
                    renderItem={({ item }) => <Users data={item} onPress={() => DetailsUser(item)} />}
                    ListHeaderComponent={
                        <><View>
                            <Input placeholder="Pesquisar Usuário" onChangeText={setSearch} />
                            <Input placeholder="Seu Nome" onChangeText={setName} value={name} />
                            <Input placeholder="Seu CPF" onChangeText={setCpf} value={cpf} />
                            <Input placeholder="Seu Endereço" onChangeText={setEndereco} value={endereco} />
                            <Input placeholder="Seu Telefone" onChangeText={setnumero} value={numero} />
                            <Input placeholder="Sua Idade" onChangeText={setIdade} value={idade} />

                        </View><Buttons
                                title='Atualizar'
                                bgColor='#8c4777'
                                customClick={HandleSave} /></>

                    }
                />
            </KeyboardAvoidingView>

        </View>
    )
}

export default UpdateUser