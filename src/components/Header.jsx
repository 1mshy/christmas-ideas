import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';
import Snowfall from 'react-snowfall';

function Header() {
  return (
    <AppBar position="static" style={{ background: '#C0392B' }}>
      <Toolbar>
        <Typography variant="h4" style={{ flexGrow: 1, textAlign: 'center' }}>
          🎅 Christmas Couple Adventures 🎄
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
