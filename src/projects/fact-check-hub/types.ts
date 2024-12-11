export interface FactCheckResponse {
    validation_result: string;
    confidence_score?: number;
  }
  
  export interface FactCheckFormData {
    statement: string;
    openaiApiKey: string;
  }
  
  export interface FileUploadResponse {
    url: string;
    key: string;
  }