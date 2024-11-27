import React from 'react';
import { Typography, Box } from '@mui/material';

function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: '#27AE60',
        color: '#FDFEFE',
        textAlign: 'center',
        padding: '1rem',
        marginTop: 'auto',
      }}
    >
      <Typography variant="body1">
        © {new Date().getFullYear()} Christmas Couple Adventures
      </Typography>
      <Typography variant="body2">
        Made with ❤️ for the most beautiful girl in the world 
      </Typography>
      <Typography variant="body3">
        {/* Change writing here for your very own significant other */}
        Kyra - No comment.
      </Typography>
    </Box>
  );
}

export default Footer;
