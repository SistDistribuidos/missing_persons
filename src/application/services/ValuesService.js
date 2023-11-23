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
                label: element.nacionalidad,
                code_icon: element.code_icon,
            };
            elementsLabel.push(newElement);
        });
        console.log(elementsLabel);
        return elementsLabel;
    } catch (error) {
        console.error('error al cargar nacionalidades', error);
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
                label: element.nombre,
                // image_path: "../../../domain/assets/hair/"+ element.nombre +".png"
            };
            elementsLabel.push(newElement);
        });
        console.log(elementsLabel);
        return elementsLabel;
    } catch (error) {
        console.error('error al cargar los colores', error);
    }

}

export const getHistory = async () => {
    const userId = 1;   // modificar parametro cuando se tenga usuarios
    const EndPoint = `historial-denuncias/${userId}`;
    try {
        const history = await getDatos(EndPoint);
        const listOfHistories = history.datos;
        console.log(listOfHistories);
        let elementsLabel = []
        listOfHistories.forEach(element => {
            const newElement = {
                key: `item${element.id}`,
                nombre: `${element.nombre}`,
                apellido: `${element.apellidos}`,
                estado: `${element.estado}`,
                descripcion: `Fue visto por ultima ves en ${element.direccion} el dia ${element.fecha_desaparicion} a horas ${element.hora_desaparicion}, con ${element.ultima_ropa_puesta}`,
                imagen1: element.documento_id,
                imagen2: element.imagen1
            };
            elementsLabel.push(newElement);
        });
        return elementsLabel;
    } catch (error) {
        console.log('Ocurrio un error cargando el historial ', error);
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

export const sendData = async (data) => {
    const endPoint = 'denunciar';
    try {
        const formData = new FormData();
        formData.append('nombre', data.nombre);
        formData.append('apellidos', `apellidos algo`);
        formData.append('cicatriz', data.cicatriz);
        formData.append('color_cabello', data.color_cabello);
        formData.append('color_ojos', data.color_ojos);
        formData.append('contacto', data.contacto);
        formData.append('altura', data.altura);
        formData.append('peso', data.peso);
        formData.append('direccion', data.direccion);
        formData.append('fecha_desaparicion', data.fecha_desaparicion);
        formData.append('hora_desaparicion', data.hora_desaparicion);
        formData.append('ultima_ropa_puesta', data.ultima_ropa_puesta);
        formData.append('user_id', 1);
        formData.append('tatuaje', data.tatuaje);
        formData.append('genero', data.genero);
        formData.append('nacionalidad_id', data.nacionalidad_id);
        formData.append('idioma_id', data.idioma_id);
        formData.append('fecha_nacimiento', data.fechas_nacimiento);
        formData.append('direccion', "12545.11,55154457.5");
        formData.append('ubicacion', JSON.stringify(data.ubicacion));
        console.log(JSON.stringify(data.ubicacion))
        formData.append('foto_denuncia', {
            uri: data.documento_id,
            type: 'image/jpeg',
            name: 'image1.jpg'
        } );
        formData.append('imagen1', {
            uri: data.image,
            type: 'image/jpeg',
            name: 'image2.jpg'
        } );
        
        /* Falta codigo aqui */

        
        const response = await enviarDatosMultimedia(endPoint, formData);
        return response;
    } catch {

    }


    
}
