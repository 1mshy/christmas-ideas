import React from 'react';
import { Card, CardContent, Typography, Button } from '@mui/material';

function ActivityCard({ title, activity, onShuffle }) {
  return (
    <Card
      variant="outlined"
      style={{
        maxWidth: '500px',
        margin: '0 auto',
        textAlign: 'center',
        backgroundColor: '#FDFEFE',
        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
      }}
    >
      <CardContent>
      <Typography variant="h5" color="primary" style={{ marginBottom: '1rem' }}>
          {title}
        </Typography>
        <Typography variant="h4" color="primary" style={{ marginBottom: '1rem' }}>
          {activity}
        </Typography>
        <Button
          variant="contained"
          color="secondary"
          onClick={onShuffle}
          style={{
            borderRadius: '25px',
            fontWeight: 'bold',
          }}
        >
          Shuffle Activity
        </Button>
      </CardContent>
    </Card>
  );
}

export default ActivityCard;
