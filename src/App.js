import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './components/Header';
import Banner from './components/Banner';
import About from './components/About';
import Users from './components/Users';
import 'normalize.css';
import './App.scss';

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios(
        'https://frontend-test-assignment-api.abz.agency/api/v1/users?page=1&count=6',
      );
      setUsers(response.data.users);
    };

    fetchData();
  }, []);

  console.log(users);

  return (
    <>
      <Header />
      <Banner />
      <About />
      <Users users={users} />
    </>
  );
}

export default App;
