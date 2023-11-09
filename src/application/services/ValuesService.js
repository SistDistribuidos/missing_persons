import { getDatos, enviarDatosMultimedia } from './ApiService';

export const getNationalities = async () => {
    const EndPoint = 'getNacionalidades';
    try {
        const nationalities = await getDatos(EndPoint);
        const listOfNationalities = nationalities.data;
        let elementsLabel = []
        listOfNationalities.forEach(element => {
            const newElement = {
                id: element.id,
                label: element.nacionalidad
            };
            elementsLabel.push(newElement);
        });
        console.log(elementsLabel);
        return elementsLabel;
    } catch {

    }
    
}

export const getColors = async () => {
    const EndPoint = 'getColores';
    try {
        const colors = await getDatos(EndPoint);
        const listOfColors = colors.data;
        let elementsLabel = []
        listOfColors.forEach(element => {
            const newElement = {
                id: element.id,
                label: element.nombre
            };
            elementsLabel.push(newElement);
        });
        console.log(elementsLabel);
        return elementsLabel;
    } catch {

    }

}

export const getLanguages = async () => {
    const EndPoint = 'getIdiomas';
    try {
        const languages = await getDatos(EndPoint);
        const listOfLanguages = languages.data;
        let elementsLabel = []
        listOfLanguages.forEach(element => {
            const newElement = {
                id: element.id,
                label: element.nombre
            };
            elementsLabel.push(newElement);
        });
        console.log(elementsLabel);
        return elementsLabel;
    } catch {

    }


    
}

export const sendData = async (data, imageDenuncia, imageDenuncia2) => {
    const EndPoint = 'denunciar';
    try {
        const formData = new FormData();
        formData.append('nombre', data.nombre);
        formData.append('apellidos', 'llllll');
        /* Falta codigo aqui */

        
        const response = await enviarDatosMultimedia(EndPoint, data);
        return response;
    } catch {

    }


    
}
