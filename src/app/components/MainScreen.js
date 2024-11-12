import React from 'react';

const MainScreen = () => {
  return (
    <div>
      <h1>Welcome to Sleep Better!</h1>
      <button onClick={() => { /* Play music */ }}>Play Calming Music</button>
      <button onClick={() => { /* Play stories */ }}>Listen to Stories</button>
      <button onClick={() => { /* Start meditation */ }}>Start Meditation</button>
    </div>
  );
};

export default MainScreen;
