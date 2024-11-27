import { Box, CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import React, { useState } from 'react';
import Snowfall from 'react-snowfall';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ActivityCard from './components/ActivityCard';
import Footer from './components/Footer';
import Header from './components/Header';
import { annoyed_notifications } from './funny';
import theme from './styles/theme';

/**
 * Fetches the json data from my github
 */
let activities;

fetch("https://raw.githubusercontent.com/1mshy/christmas-ideas/refs/heads/main/public/activities.json")
  .then(res => res.json())
  .then(res => {
    activities = res
  })


// if you want to customize them from the file in public/activities.json,
// and uncomment the code under and comment the fetch statement above
//
fetch("activities.json")
  .then(res => res.json())
  .then(res => {
    activities = res
  })
//

function App() {
  const [currentActivity, setCurrentActivity] = useState(
    { title: "", activity: "Click 'Shuffle' to find your next cheerful activity!" }
  );
  const [counter, setCounter] = useState(0);

  const shuffleActivity = () => {
    if (!activities) return;
    if (counter >= 5) {
      annoyed_notifications();
      setCounter(1);
    } else {
      setCounter(counter + 1);
    }
    const randomActivity = activities[Math.floor(Math.random() * activities.length)];
    setCurrentActivity(randomActivity);

  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ToastContainer />
      <Snowfall />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh',
        }}
      >
        <Header />
        <Box
          component="main"
          sx={{
            flex: 1,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '2rem',
          }}
        >
          <ActivityCard title={currentActivity.title} activity={currentActivity.activity} onShuffle={shuffleActivity} />
        </Box>
        <Footer />
      </Box>
    </ThemeProvider>
  );
}

export default App;
