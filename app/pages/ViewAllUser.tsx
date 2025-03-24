import { useEffect, useState } from "react";
import { View, FlatList } from "react-native";
import { UseUsersDatabase, UsersDataBase } from "../database/useUsersDatabase";
import Users from "@/components/users";


function ViewAllUser() {
    const [search, setsearch] = useState('')
    const [users, setUsers] = useState<UsersDataBase[]>([])

    const userDatabase = UseUsersDatabase()

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
        <View style={{flex: 1, alignItems: 'center'}}>
            <FlatList
                data={users}
                keyExtractor={(item) => String(item.id)}
                renderItem={({item}) => <Users data={item}/>}
            />
        </View>
    )
}

export default ViewAllUser