import React from 'react';
import Counter from './Counter';
import Navigation from './Navigation';
import './style.css';

const Home = () => {
  return (
    <div>
        <Navigation />
        <h1>Welcome to the Home Page</h1>
        <h2>Enjoy clicking buttons!</h2>
        <Counter />
    </div>
  );
};

export default Home;
