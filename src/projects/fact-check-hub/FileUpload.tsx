import React, { useRef } from 'react';
import { Upload } from 'lucide-react';
import { Button, Typography, Box } from '@mui/material';

interface FileUploadProps {
  onFileSelect: (file: File) => void;
}

export const FileUpload: React.FC<FileUploadProps> = ({ onFileSelect }) => {

  const fileInputRef = useRef<HTMLInputElement | null>(null);
  
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file && file.type === 'text/csv') {
      onFileSelect(file);
      if (fileInputRef.current) {
        fileInputRef.current.value = ''; // Reset input value
      }
    }
  };

  return (
    <Box className="w-full" sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <label htmlFor="file-upload">
        <input
          type="file"
          id="file-upload"
          className="hidden"
          accept=".csv"
          onChange={handleFileChange}
          ref={fileInputRef}
        />
        <Button
          component="span"
          variant="outlined"
          startIcon={<Upload />}
          sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: 2 }}
        >
          <Typography variant="body2" color="white" sx={{ marginTop: 1 }}>
            Upload CSV file with facts
          </Typography>
        </Button>
      </label>
    </Box>
  );
};
