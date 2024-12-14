import React, { useRef, useState } from 'react';
import { FileUpload } from '../utils/FileUpload';
import { ChatPdfResponse } from './types';
import { Snackbar, Alert } from '@mui/material';
import { chatPdfApi } from './services/api';
import { ChatPdfForm } from './ChatPdfForm';
import { ChatPdfResult } from './ChatPdfResult';

export const ChatWithPdf: React.FC = () => {
  const [query, setQuery] = useState('');
  const [response, setResponse] = useState<ChatPdfResponse | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [fileName, setFileName] = useState('');
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleFileUpload = async (file: File) => {
    try {
      const fileName = file.name;
      console.log(fileName);
      const uploadResponse = await chatPdfApi.uploadFile(file, 'ragithm', fileName);
      setSuccessMessage('File uploaded successfully!');
      setFileName(fileName);

      if (fileInputRef.current) {
        fileInputRef.current.value = ''; // Reset input value
      }
    } catch (err) {
      setError('Failed to upload file');
    }
  };

  const handleQuerySubmit = async () => {
    if (!query) return;

    setLoading(true);
    setError('');

    try {
      const response = await chatPdfApi.queryPdf({
        query,
        fileName
      });
      setResponse(response);
    } catch (err) {
      setError('Failed to process query');
      console.error('Query error:', err);
      setResponse(null);
    } finally {
      setLoading(false);
    }
  };

  const handleCloseSnackbar = () => {
    setSuccessMessage(''); // Clear success message after closing the snackbar
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Chat with PDF</h1>

      <div className="mb-6">
        <FileUpload onFileSelect={handleFileUpload} acceptedFileTypes={'application/pdf'} />
        <div className="mt-2 text-sm text-gray-500">
          <p>Upload a PDF file to interact with its content:</p>
          <ul>
            <li><strong>Query</strong> - Ask questions about the uploaded PDF.</li>
          </ul>
        </div>
      </div>

      <ChatPdfForm
        statement={query}
        onStatementChange={setQuery}
        onSubmit={handleQuerySubmit}
        isLoading={loading}
      />

      {error && (
        <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg text-red-600">
          {error}
        </div>
      )}

      <Snackbar
        open={!!successMessage}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
      >
        <Alert onClose={handleCloseSnackbar} severity="success" sx={{ width: '100%' }}>
          {successMessage}
        </Alert>
      </Snackbar>

      {response && <ChatPdfResult result={response.result} />}
    </div>
  );
};
