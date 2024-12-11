import React, { useState } from 'react';
import { FileUpload } from './FileUpload';
import { FactCheckResponse } from './types';
import { factCheckApi } from './services/api';
import { FactCheckResult } from './FactCheckResult';
import { FactCheckForm } from './FactCheckForm';


export const FactCheckHub: React.FC = () => {
  const [statement, setStatement] = useState('');

  const [apiKey, setApiKey] = useState('');
  const [response, setResponse] = useState<FactCheckResponse | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleFileUpload = async (file: File) => {
    try {
      const uploadResponse = await factCheckApi.uploadFile(file);
      console.log('File uploaded successfully:', uploadResponse);
      // Handle the uploaded file response as needed
    } catch (err) {
      setError('Failed to upload file');
      console.error('File upload error:', err);
    }
  };

  const handleFactCheck = async () => {
    if (!statement || !apiKey) return;

    setLoading(true);
    setError('');
    
    try {
      const response = await factCheckApi.checkFact({
        statement,
        openaiApiKey: apiKey
      });
      setResponse(response);
    } catch (err) {
      setError('Failed to verify statement');
      console.error('Fact check error:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-2xl font-bold  mb-6">
        Fact Check Hub
      </h1>

      <div className="mb-6">
        <FileUpload onFileSelect={handleFileUpload} />
      </div>

      <FactCheckForm
        statement={statement}
        apiKey={apiKey}
        onStatementChange={setStatement}
        onApiKeyChange={setApiKey}
        onSubmit={handleFactCheck}
        isLoading={loading}
      />

      {error && (
        <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg text-red-600">
          {error}
        </div>
      )}

      {response && <FactCheckResult result={response.validation_result} />}
    </div>
  );
};