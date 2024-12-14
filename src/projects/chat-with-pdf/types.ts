export interface ChatPdfResponse {
    result: string;
  }
  
  export interface ChatPdfData {
    query: string;
    fileName: string;
  }
  
  export interface FileUploadResponse {
    url: string;
    key: string;
  }