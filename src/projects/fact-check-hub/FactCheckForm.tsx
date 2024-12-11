import React from 'react';
import { Send } from 'lucide-react';
import { TextField, Button, CircularProgress, Typography } from '@mui/material';

interface FactCheckFormProps {
  statement: string;
  apiKey: string;
  onStatementChange: (value: string) => void;
  onApiKeyChange: (value: string) => void;
  onSubmit: () => void;
  isLoading: boolean;
}

export const FactCheckForm: React.FC<FactCheckFormProps> = ({
  statement,
  apiKey,
  onStatementChange,
  onApiKeyChange,
  onSubmit,
  isLoading
}) => {
  return (
    <div style={{ width: '100%' }}>
      <div>
        <Typography variant="body2" color="white" gutterBottom>
          OpenAI API Key
        </Typography>
        <TextField
          type="password"
          value={apiKey}
          onChange={(e) => onApiKeyChange(e.target.value)}
          fullWidth
          variant="outlined"
          placeholder="Enter your OpenAI API key"
          disabled={isLoading}
          sx={{
            '& .MuiOutlinedInput-root': {
              backgroundColor: 'rgba(38, 38, 38, 0.9)', // Dark background
              borderRadius: 2,
              '& input': {
                color: 'white', // White text inside the input
              },
            },
            '& .MuiFormLabel-root': {
              color: 'white', // White label text
            },
            '& .MuiFormLabel-root.Mui-focused': {
              color: 'white', // Label stays white when focused
            },
          }}
        />
      </div>

      <div style={{ marginTop: 16 }}>
        <Typography variant="body2" color="white" gutterBottom>
          Statement to Verify
        </Typography>
        <TextField
          value={statement}
          onChange={(e) => onStatementChange(e.target.value)}
          fullWidth
          multiline
          rows={4}
          placeholder="Enter the statement to fact check..."
          disabled={isLoading}
          sx={{
            '& .MuiOutlinedInput-root': {
              backgroundColor: 'rgba(38, 38, 38, 0.9)', // Dark background
              borderRadius: 2,
            },
            '& .MuiInputBase-input': {
              color: 'white', // White text inside the input
            },
            '& .MuiInputBase-input::placeholder': {
              color: 'white', // White placeholder text
            },
            '& .MuiFormLabel-root': {
              color: 'white', // White label text
            },
            '& .MuiFormLabel-root.Mui-focused': {
              color: 'white', // Label stays white when focused
            },
            '& .MuiInputBase-root.Mui-disabled': {
              color: 'white', // Ensure the text is white when disabled
            },
          }}
        />

      </div>

      
      <Button
        onClick={onSubmit}
        disabled={isLoading || !statement || !apiKey}
        fullWidth
        color="primary"
        sx={{
          marginTop: 2,
          display: 'flex',
          justifyContent: 'center',
          
        }}
      >
        {isLoading ? (
          <CircularProgress size={24} color="inherit" />
        ) : (
          <>
            <Send style={{ marginRight: 8 }} />
            Verify Statement
          </>
        )}
      </Button>
    </div>
  );
};
