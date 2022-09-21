import React, { useContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import Context from '../context/context';
import Cards from '../pages/Cards';
import Main from '../pages/Main';
import Numbers from '../pages/Numbers';

const AppRoutes = () => {
  const { isLoginUser } = useContext(Context);

  return isLoginUser ? (
    <Routes>
      <Route path='numbers' element={<Numbers />}></Route>
      <Route path='cards' element={<Cards />}></Route>
      <Route path='*' element={<Main />}></Route>
    </Routes>
  ) : (
    <Routes>
      <Route path='*' element={<Main />}></Route>
    </Routes>
  );
};

export default AppRoutes;
