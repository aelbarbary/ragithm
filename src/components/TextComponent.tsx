import React from 'react';
import { TextField, Typography } from '@mui/material';

interface TextComponentProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  type?: string;
  placeholder: string;
  isLoading: boolean;
  multiline?: boolean;
  rows?: number;
}

const TextComponent: React.FC<TextComponentProps> = ({
  label,
  value,
  onChange,
  type = 'text',
  placeholder,
  isLoading,
  multiline = false,
  rows = 1,
}) => {
  return (
    <div style={{ marginBottom: 16 }}>
      <Typography variant="body2" color="white" gutterBottom>
        {label}
      </Typography>
      <TextField
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        fullWidth
        multiline={multiline}
        rows={rows}
        placeholder={placeholder}
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
  );
};

export default TextComponent;
