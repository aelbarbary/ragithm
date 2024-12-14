import React from 'react';
import { Send } from 'lucide-react';
import { TextField, Button, CircularProgress, Typography } from '@mui/material';

interface ChatPdfFormProps {
  statement: string;
  onStatementChange: (value: string) => void;
  onSubmit: () => void;
  isLoading: boolean;
}

export const ChatPdfForm: React.FC<ChatPdfFormProps> = ({
  statement,
  onStatementChange,
  onSubmit,
  isLoading
}) => {
  return (
    <div style={{ width: '100%' }}>
      <div style={{ marginTop: 16 }}>
        <Typography variant="body2" color="white" gutterBottom>
          Ask any question...
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
        disabled={isLoading || !statement}
        fullWidth
        color="primary"
        sx={{
          marginTop: 2,
          display: 'flex',
          justifyContent: 'center',
          
        }}
      >
        {isLoading ? (
          <CircularProgress size={24} color="inherit" sx={{color: 'white'}}/>
        ) : (
          <>
            <Send style={{ marginRight: 8 }} />
            Query
          </>
        )}
      </Button>
    </div>
  );
};
