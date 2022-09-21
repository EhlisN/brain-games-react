import React, { useEffect, useState } from 'react';
import './App.css';
import AppRoutes from './components/AppRoutes';
import Modal from './components/Modal/Modal';
import NavBar from './components/NavBar/NavBar';
import Context from './context/context';

function App() {
  const [openModal, setOpenModal] = useState(false);
  const [isLoginUser, setIsLoginUser] = useState(false);
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsLoginUser(true);
    }
  }, []);
  return (
    <Context.Provider
      value={{ openModal, setOpenModal, isLoginUser, setIsLoginUser }}
    >
      <NavBar />
      <AppRoutes />
      <Modal />
    </Context.Provider>
  );
}

export default App;
