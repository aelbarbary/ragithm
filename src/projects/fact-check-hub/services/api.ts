import axios from 'axios';
import { FactCheckFormData, FactCheckResponse, FileUploadResponse } from '../types';


const API_BASE_URL = 'http://0.0.0.0:8001/v1';

export const factCheckApi = {
  checkFact: async (data: FactCheckFormData): Promise<FactCheckResponse> => {
    const response = await axios.post(`${API_BASE_URL}/fact-check`, {
      bucket_name: "fact-check-hub",
      s3_key: "sample-political-facts.txt",
      statement: data.statement,
      openai_api_key: data.openaiApiKey,
    });
    return response.data;
  },

  uploadFile: async (file: File): Promise<FileUploadResponse> => {
    const formData = new FormData();
    formData.append('file', file);
    const response = await axios.post(`${API_BASE_URL}/upload`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data;
  }
};