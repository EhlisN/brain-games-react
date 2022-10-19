import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import Context from '../../context/context';
import httpsUser from '../../https/httpsUser';
import './Login.css';

const Login = () => {
  const { setOpenModal, setIsLoginUser } = useContext(Context);
  const location = useLocation();
  const isLogin = location.pathname === '/login';
  const [login, setLogin] = useState('eve.holt@reqres.in');
  const [password, setPassword] = useState('cityslicka');

  const authorization = async () => {
    const data = { email: login, password: password };
    try {
      const authorizationData = await httpsUser.post(
        `${isLogin ? 'login' : 'register'}`,
        data
      );
      if (authorizationData.data.token) {
        localStorage.setItem('token', authorizationData.data.token);
        localStorage.setItem('numbers', '0');
        localStorage.setItem('cards', '0');
        setIsLoginUser(true);
        setOpenModal(false);
      }
      if (authorizationData.data.email) {
        alert('Congratulation, you registered!');
        setLogin('');
        setPassword('');
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className='row container login'>
      <input
        className='m-3 form-control'
        placeholder='Input value'
        value={login}
        onChange={(event) => setLogin(event.target.value)}
      />
      <input
        className='m-3 form-control'
        placeholder='Input password'
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />
      <Link className='registration' to={isLogin ? 'registration' : 'login'}>
        {isLogin
          ? 'Do not have an account? Registration!'
          : 'Have an account? Login'}
      </Link>
      <button
        className='btn-log btn-primary col-5 my-3'
        onClick={() => authorization()}
      >
        {isLogin ? 'Login' : 'Registration'}
      </button>
    </div>
  );
};

export default Login;
