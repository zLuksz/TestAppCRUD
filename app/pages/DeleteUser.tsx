import { useEffect, useState } from "react";
import { View, FlatList, Alert } from "react-native";
import { UseUsersDatabase, UsersDataBase } from "../database/useUsersDatabase";
import Input from "@/components/input";
import UsersDelete from "@/components/usersDelete";


function DeleteUser() {
    const [search, setSearch] = useState('')
    const [users, setUsers] = useState<UsersDataBase[]>([])

    const userDatabase = UseUsersDatabase()

    async function DeleteUser(id: number) {
        try {
            await userDatabase.remove(id)
            await List()
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
        if (search.trim()) {
            List()
        } else {
            setUsers([])
        }
    }, [search])

    return (
        <View style={{flex: 1, alignItems: 'center'}}>
            <Input placeholder="Pesquisar Usuário" onChangeText={setSearch}/>
        
            <FlatList
                data={users}
                keyExtractor={(item) => String(item.id)}
                renderItem={({item}) => <UsersDelete data={item} onDelete={() => DeleteUser(item.id)}/>}
            />
        </View>
    )
}

export default DeleteUser