import React, { useState, useEffect } from 'react';
import { useMedia } from 'react-media';
import Header from './components/Header';
import Banner from './components/Banner';
import About from './components/About';
import Users from './components/Users';
import Register from './components/Register';
import Footer from './components/Footer';
import config from './config/config';
import * as API from './services/api';
import 'normalize.css';
import './App.scss';

function App() {
  const [users, setUsers] = useState([]);
  const [positions, setPositions] = useState([]);
  console.log(positions);

  const matches = useMedia({ queries: config.GLOBAL_MEDIA_QUERIES });
  const usersNum = matches.small ? 3 : 6;

  useEffect(() => {
    API.fetchUsers(usersNum).then(res => setUsers(res.data.users));
    API.fetchPositions().then(res => setPositions(res.data.positions));
  }, [usersNum]);

  return (
    <>
      <Header />
      <Banner />
      <About />
      <Users users={users} />
      <Register positions={positions} />
      <Footer />
    </>
  );
}

export default App;
