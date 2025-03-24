import { useSQLiteContext } from "expo-sqlite"

export type UsersDataBase = {
    id: number
    name: string
    endereco: string
    numero: number
    idade: number
    cpf: string
}

export function UseUsersDatabase() {
    const database = useSQLiteContext()

    async function create(data: Omit<UsersDataBase, 'id'>) {
        const statement = await database.prepareAsync(
            'INSERT INTO usuarios (name, endereco, numero, idade, cpf) VALUES ($name, $endereco, $numero, $idade, $cpf)'
        )
        try {
            const result = await statement.executeAsync({
                $name: data.name,
                $endereco: data.endereco,
                $numero: data.numero,
                $idade: data.idade,
                $cpf: data.cpf
            })
            const insertedRowId = result.lastInsertRowId.toLocaleString()

            return { insertedRowId }
        } catch (error) {
            throw error
        } finally {
            await statement.finalizeAsync()
        }
    }

    async function searchByName(cpf: string) {
        try {
            const query = 'SELECT * FROM usuarios WHERE cpf LIKE ?'
            const response = await database.getAllAsync<UsersDataBase>(query, `${cpf}%`)

            return response
        } catch (error) {
            throw error
        }
    }

    async function update(data: UsersDataBase) {
        const statement = await database.prepareAsync(
            'UPDATE usuarios SET name = $name, endereco = $endereco, numero = $numero, idade = $idade, cpf = $cpf WHERE id = $id'
        )
        try {
            await statement.executeAsync({
                $id: data.id,
                $name: data.name,
                $endereco: data.endereco,
                $numero: data.numero,
                $idade: data.idade,
                $cpf: data.cpf
            })
        } catch (error) {
            throw error
        } finally {
            await statement.finalizeAsync()
        }
    }

    async function remove(id: number) {
        try {
            await database.execAsync('DELETE FROM usuarios WHERE id = ' + id)
        } catch (error) {
            throw error
        }
    }

    async function validateCPF(cpf: string) {
        try {
            const query = 'SELECT * FROM usuarios WHERE cpf = ?'
            const result = await database.getAllAsync<UsersDataBase>(query, [cpf])

            return result

        } catch (error) {
            throw error
        }
    }


    return { create, searchByName, update, remove, validateCPF }
}