import * as SecureStore from 'expo-secure-store';

const TOKEN_KEY = 'token'

async function save(key, data){
    try{
        await SecureStore.setItemAsync(key, JSON.stringify(data));
        return JSON.stringify(data)
    }catch (error){
        console.error('error al guardar usando expo secure store ', error);
        throw error;
    }
}
async function getValueFor(key){
    try {
        
        let item = await SecureStore.getItemAsync(key);
        return JSON.parse(item);
    }catch(error){
        console.error('error to getValueFor ', error);
        throw error;
    }
}
async function deleteValueFor(key){
    try{
        
        await SecureStore.deleteItemAsync(key);
        const item = await getValueFor(key);
        return item == null ? 'Eliminado' : 'No se pudo eliminar';
    }catch (error){
        console.log('error al eliminar: '+ error.message)
        throw error;
    }
}

//metodos para guardar token de usuario
async function saveToken(value){
    return save(TOKEN_KEY, value);
}
async function getValueForToken(){
    return getValueFor(TOKEN_KEY);
}
async function deleteValueForToken(){
    try {
        const response = await deleteValueFor(TOKEN_KEY);
        return response;
    }catch(error) {
        throw error;
    };
}

export {deleteValueForToken, getValueForToken, saveToken }
