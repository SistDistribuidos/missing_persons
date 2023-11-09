import axios from 'axios';

const apiService = axios.create({
  baseURL: 'http://192.168.1.11/api', 
});

export const getDatos = async (endpoint) => {
  try {
    const response = await apiService.get(`/${ endpoint }`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const enviarDatos = async (endpoint, data) => {
    try {
      const response = await apiService.post(`${ endpoint }`, data, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      return response.data;
    } catch (error) {
      throw error;
    }
  };

export const enviarDatosMultimedia = async (endpoint, data) => {
    try {
      const response = await apiService.post('/enviar', data, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
  
      return response.data;
    } catch (error) {
      throw error;
    }
  };
