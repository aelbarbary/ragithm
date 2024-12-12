import axios from 'axios';
import { FactCheckFormData, FactCheckResponse, FileUploadResponse } from '../types';


const API_BASE_URL = 'http://localhost:8000/ragithm/v1';

export const factCheckApi = {
  checkFact: async (data: FactCheckFormData): Promise<FactCheckResponse> => {
    const response = await axios.post(`${API_BASE_URL}/fact-check`, {
      bucket_name: "ragithm",
      s3_key: data.fileName,
      statement: data.statement,
    });
    return response.data;
  },

  uploadFile: async (file: File, bucketName: string, fileName: string): Promise<FileUploadResponse> => {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('bucket_name', bucketName);  
    formData.append('file_name', fileName);
  
    const response = await axios.post(`${API_BASE_URL}/upload-file`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  
    return response.data;
  }

};