// import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginScreen from './app/components/LoginScreen';
import MainScreen from './app/components/MainScreen';
import PaymentScreen from './app/components/PaymentScreen';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" component={LoginScreen} />
        <Route path="/main" component={MainScreen} />
        <Route path="/payment" component={PaymentScreen} />
      </Routes>
    </Router>
  );
};


export default App;
