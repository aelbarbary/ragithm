import React, { useRef, useState } from 'react';
import { FileUpload } from './FileUpload';
import { FactCheckResponse } from './types';
import { factCheckApi } from './services/api';
import { FactCheckResult } from './FactCheckResult';
import { FactCheckForm } from './FactCheckForm';
import { Snackbar, Alert } from '@mui/material';


export const FactCheckHub: React.FC = () => {
  const [statement, setStatement] = useState('');
  const [response, setResponse] = useState<FactCheckResponse | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [fileName, setFileName] = useState('');
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  
  const handleFileUpload = async (file: File) => {
    try {
      const fileName = file.name;
      console.log(fileName);
      const uploadResponse = await factCheckApi.uploadFile(file, 'ragithm', fileName );
      setSuccessMessage('File uploaded successfully!');
      setFileName(fileName)

      if (fileInputRef.current) {
        fileInputRef.current.value = ''; // Reset input value
      }
      // Handle the uploaded file response as needed
    } catch (err) {
      setError('Failed to upload file');
    }
  };

  const handleFactCheck = async () => {
    if (!statement ) return;

    setLoading(true);
    setError('');
    
    try {
      const response = await factCheckApi.checkFact({
        statement,
        fileName
      });
      setResponse(response);
    } catch (err) {
      setError('Failed to verify statement');
      console.error('Fact check error:', err);
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
      <h1 className="text-2xl font-bold  mb-6">
        Fact Check Hub
      </h1>

      <div className="mb-6">
        <FileUpload onFileSelect={handleFileUpload}  />
        {/* File upload information */}
        <div className="mt-2 text-sm text-gray-500">
          <p>Upload a CSV file in the following format:</p>
          <ul>
            <li><strong>Fact</strong> - The statement to be fact-checked (e.g., "The earth is flat").</li>
          </ul>
        </div>
      </div>

      <FactCheckForm
        statement={statement}
        onStatementChange={setStatement}
        onSubmit={handleFactCheck}
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


      {response && <FactCheckResult result={response.validation_result} />}
    </div>
  );
};