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

const activities = [
  { "title": "Festive Attractions & Experiences", "activity": "Visit the Montreal Christmas Market (Le Grand Marché de Noël)." },
  { "title": "Festive Attractions & Experiences", "activity": "Explore the Old Port Christmas Village." },
  { "title": "Festive Attractions & Experiences", "activity": "Marvel at the lights in Place Jacques-Cartier." },
  { "title": "Festive Attractions & Experiences", "activity": "Take a stroll through the illuminated Montreal Botanical Garden (Jardin Botanique)." },
  { "title": "Festive Attractions & Experiences", "activity": "Skate at the Old Port Skating Rink." },
  { "title": "Festive Attractions & Experiences", "activity": "Attend the Noël dans le Parc festival." },
  { "title": "Festive Attractions & Experiences", "activity": "Walk the Mont-Royal Summit Lookout in the snow." },
  { "title": "Festive Attractions & Experiences", "activity": "Visit Notre-Dame Basilica for their special holiday light show, Aura." },
  { "title": "Festive Attractions & Experiences", "activity": "Take a Christmas-themed carriage ride in Old Montreal." },
  { "title": "Festive Attractions & Experiences", "activity": "Experience the Holiday Lights Tour across downtown Montreal." },
  { "title": "Outdoor Winter Fun", "activity": "SNOWBALL FIGHTTTTT!!!!!☃️☃️" },
  { "title": "Outdoor Winter Fun", "activity": "Go skiing or snowboarding down Saint-Sauver ⛷️🎿🏂" },
  { "title": "Outdoor Winter Fun", "activity": "Go sledding at Parc La Fontaine." },
  { "title": "Outdoor Winter Fun", "activity": "Go skating at an arena" },
  { "title": "Outdoor Winter Fun", "activity": "Get Tims and go skating at an outdoor park" },
  { "title": "Outdoor Winter Fun", "activity": "Try cross-country skiing at Parc Jean-Drapeau." },
  { "title": "Outdoor Winter Fun", "activity": "Enjoy snowshoeing on Mount Royal." },
  { "title": "Outdoor Winter Fun", "activity": "Explore Lachine Canal Ice Walk." },
  { "title": "Outdoor Winter Fun", "activity": "Visit Beaver Lake for picturesque scenery." },
  { "title": "Outdoor Winter Fun", "activity": "Join a dog-sledding tour outside the city." },
  { "title": "Outdoor Winter Fun", "activity": "Go tobogganing in Parc Maisonneuve." },
  { "title": "Outdoor Winter Fun", "activity": "Enjoy a winter picnic in Parc Angrignon." },
  { "title": "Outdoor Winter Fun", "activity": "Hike through snowy trails in Cap-Saint-Jacques Nature Park." },
  { "title": "Outdoor Winter Fun", "activity": "Try ice climbing adventures on nearby frozen waterfalls." },
  { "title": "Festive Food & Drink", "activity": "Gnocchi for dinner" },
  { "title": "Festive Food & Drink", "activity": "Make some chocolate chip cookies" },
  { "title": "Festive Food & Drink", "activity": "Drink hot chocolate by the fireplace" },
  { "title": "Festive Food & Drink", "activity": "Warm up with hot chocolate from Juliette et Chocolat." },
  { "title": "Festive Food & Drink", "activity": "Make a warm dinner at home while listening to christmas cheer" },
  { "title": "Festive Food & Drink", "activity": "Indulge in holiday pastries from Pâtisserie Au Kouign-Amann." },
  { "title": "Festive Food & Drink", "activity": "Visit a cabane à sucre (sugar shack) for holiday treats." },
  { "title": "Festive Food & Drink", "activity": "Try mulled wine at a local holiday market." },
  { "title": "Festive Food & Drink", "activity": "Enjoy a Christmas-themed high tea at Ritz-Carlton Montreal." },
  { "title": "Festive Food & Drink", "activity": "Dine at the festive Garde Manger restaurant." },
  { "title": "Festive Food & Drink", "activity": "Sample local cheese and charcuterie." },
  { "title": "Festive Food & Drink", "activity": "Enjoy poutine at La Banquise with a festive twist." },
  { "title": "Festive Food & Drink", "activity": "Taste Quebec's maple syrup desserts." },
  { "title": "Festive Food & Drink", "activity": "Enjoy festive brunches across the city." },
  { "title": "Shopping & Gifts", "activity": "Shop for handmade gifts at Atwater Market's holiday stalls." },
  { "title": "Shopping & Gifts", "activity": "Explore the Jean-Talon Market for local products." },
  { "title": "Shopping & Gifts", "activity": "Visit Bonsecours Market for artisan crafts." },
  { "title": "Shopping & Gifts", "activity": "Discover unique items at Boutique Noël Éternel." },
  { "title": "Shopping & Gifts", "activity": "Find local artwork in Old Montreal’s galleries." },
  { "title": "Shopping & Gifts", "activity": "Shop for holiday sweaters at Simons." },
  { "title": "Shopping & Gifts", "activity": "Explore Montreal’s underground city for winter shopping." },
  { "title": "Shopping & Gifts", "activity": "Attend holiday craft fairs." },
  { "title": "Shopping & Gifts", "activity": "Visit Complexe Desjardins for themed decorations." },
  { "title": "Shopping & Gifts", "activity": "Check out Eaton Centre for holiday deals." },
  { "title": "Cultural & Historical Activities", "activity": "Explore Château Ramezay Museum’s Christmas exhibit." },
  { "title": "Cultural & Historical Activities", "activity": "Attend the Montreal Symphony Orchestra's holiday concert." },
  { "title": "Cultural & Historical Activities", "activity": "See the Cirque du Soleil winter show." },
  { "title": "Cultural & Historical Activities", "activity": "Visit Pointe-à-Callière Museum for Christmas history." },
  { "title": "Cultural & Historical Activities", "activity": "Experience a traditional Christmas Mass at St. Joseph’s Oratory." },
  { "title": "Family-Friendly Fun", "activity": "Tombolaaaaaa!!! (Bingo)" },
  { "title": "Family-Friendly Fun", "activity": "Try and both come up with the same word at the same time" },
  { "title": "Family-Friendly Fun", "activity": "Take out the rusty game of monopoly" },
  { "title": "Family-Friendly Fun", "activity": "Have fun explaining your favourite personal projects to eachother" },
  { "title": "Family-Friendly Fun", "activity": "Ride the Grande Roue de Montréal for snowy views." },
  { "title": "Family-Friendly Fun", "activity": "Visit La Ronde amusement park’s winter wonderland." },
  { "title": "Family-Friendly Fun", "activity": "Enjoy Christmas-themed escape rooms." },
  { "title": "Family-Friendly Fun", "activity": "Take kids to see Santa at shopping malls." },
  { "title": "Family-Friendly Fun", "activity": "Attend a gingerbread-making workshop." },
  { "title": "Family-Friendly Fun", "activity": "Explore Biodome’s winter wildlife." },
  { "title": "Family-Friendly Fun", "activity": "Watch holiday movies at Cinéma Moderne." },
  { "title": "Family-Friendly Fun", "activity": "Build a snowman in one of Montreal’s parks." },
  { "title": "Family-Friendly Fun", "activity": "Join a family Christmas crafts workshop." },
  { "title": "Romantic Ideas", "activity": "Stroll through Old Montreal under the Christmas lights." },
  { "title": "Romantic Ideas", "activity": "Share a sleigh ride in the snow." },
  { "title": "Romantic Ideas", "activity": "Watch the stars at Montreal Planetarium." },
  { "title": "Romantic Ideas", "activity": "Have a cozy dinner by the fireplace at a rustic restaurant." },
  { "title": "Romantic Ideas", "activity": "Go for a romantic skate on a frozen lake." },
  { "title": "Romantic Ideas", "activity": "Share desserts at Cacao 70." },
  { "title": "Romantic Ideas", "activity": "Watch holiday fireworks together at the Old Port." },
  { "title": "Romantic Ideas", "activity": "Plan a romantic spa day at Bota Bota Spa." },
  { "title": "Romantic Ideas", "activity": "Rent a private cabin in the countryside." },
  { "title": "Romantic Ideas", "activity": "Write Christmas wishes together and exchange them." }
]

function App() {
  const [currentActivity, setCurrentActivity] = useState(
    { title: "", activity: "Click 'Shuffle' to find your next cheerful activity!" }
  );
  const [counter, setCounter] = useState(0);

  const shuffleActivity = () => {
    if(counter >= 5) {
      annoyed_notifications();
      setCounter(1);
    } else {
      setCounter(counter+1);
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
