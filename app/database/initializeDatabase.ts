import { type SQLiteDatabase } from 'expo-sqlite';

export async function InitializeDataBase(database: SQLiteDatabase) {

    // await database.execAsync(`
    //     DROP TABLE IF EXISTS usuarios
    // `);
    
    await database.execAsync(`
        CREATE TABLE IF NOT EXISTS usuarios (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            endereco TEXT NOT NULL,
            numero NUMBER NOT NULL,
            idade INTEGER NOT NULL,
            cpf TEXT NOT NULL CHECK (LENGTH(cpf) = 11)
        )
    `);
}