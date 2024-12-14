import React from 'react';
import { Box, Typography } from '@mui/material';

interface ChatPdfResultProps {
  result: string;
  isError?: boolean; // Optional prop to indicate error state
}

export const ChatPdfResult: React.FC<ChatPdfResultProps> = ({ result, isError = false }) => {
  return (
    <Box
      sx={{
        p: 2,
        mt: 2,
        borderRadius: 2,
        display: 'flex',
        alignItems: 'center',
        backgroundColor: isError ? '#ffe6e6' : '#e6ffe6',
        color: isError ? '#d32f2f' : '#388e3c',
      }}
    >
     
      <Typography variant="body1" sx={{ color: 'inherit' }}>
        {result}
      </Typography>
    </Box>
  );
};
