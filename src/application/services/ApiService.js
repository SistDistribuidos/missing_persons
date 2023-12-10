import axios from 'axios';

const apiService = axios.create({
  baseURL: 'http://192.168.0.104/PersonasDesaparecidas/public/api/', 
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
      const response = await apiService.post(endpoint, data, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
  
      return response.data;
    } catch (error) {
      throw error;
    }
  };

  export const enviarDatosWithToken = async (endpoint, data, token) => {
    try {
      const response = await apiService.post(`${ endpoint }`, data, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
      });
  
      return response.data;
    } catch (error) {
      throw error;
    }
  };