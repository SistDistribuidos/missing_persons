import * as SQLite from 'expo-sqlite';
import { enviroment } from '../../../enviroment';
import * as Crypto from 'expo-crypto';

const db = SQLite.openDatabase(enviroment.dbName);

export function createTable() {
    db.transaction((tx) => {
        tx.executeSql(
            'CREATE TABLE IF NOT EXISTS original_values (id INTEGER PRIMARY KEY AUTOINCREMENT, data TEXT, hash TEXT)'
        );
    });
}

export async function saveReports(id, reportsRecived) {
    const digest = await Crypto.digestStringAsync(
        Crypto.CryptoDigestAlgorithm.SHA1,
        JSON.stringify(reportsRecived)
    );
    db.transaction((tx) => {
        tx.executeSql(
            'INSERT OR REPLACE INTO original_values (id, data, hash) VALUES (?, ?, ?)',
            [id, JSON.stringify(reportsRecived), digest],
            (_, results) => {
                console.log('Valores originales almacenados en la base de datos ', results._array);
            },
            (_, error) => {
                console.error('Error al almacenar valores originales:', error);
            }
        );
    });
}

export async function getReports(id) {
    db.transaction((tx) => {
        tx.executeSql(
            'SELECT * FROM original_values WHERE id = ?',
            [id], // Valor del id que estás buscando
            (_, results) => {
                if (results.rows.length > 0) {
                    const row = results.rows.item(0);
                    const data = JSON.parse(row.data); // Convertir la cadena JSON a un objeto
                    const hash = row.hash;

                    // Hacer algo con los datos y el hash recuperados
                    console.log('Datos recuperados de la fila con id = 1:', data);
                    console.log('Hash recuperado de la fila con id = 1:', hash);
                    return { data, hash };
                } else {
                    console.log('No hay filas con id = 1 en la tabla original_values.');
                    return null;
                }
            },
            (_, error) => {
                console.error('Error al recuperar datos:', error);
                throw error;
            }
        );
    });
}



