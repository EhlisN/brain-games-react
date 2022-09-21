import React, { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Context from '../../context/context';
import './NavBar.css';

const NavBar = () => {
  const { isLoginUser, setIsLoginUser, setOpenModal } = useContext(Context);
  const location = useLocation();
  const { pathname } = location;
  const splitLocation = pathname.split('/');

  const logOut = () => {
    setIsLoginUser(false);
    localStorage.clear();
  };

  return (
    <div className='navBar'>
      <div className='logo'>
        <h1>BRAIN-GAMES</h1>
      </div>
      {isLoginUser ? (
        <>
          <ul>
            <li>
              <Link
                className={
                  splitLocation[1] === 'main' ? 'navLink active' : 'navLink'
                }
                aria-current='page'
                to='main'
              >
                Main
              </Link>
            </li>
            <li>
              <Link
                className={
                  splitLocation[1] === 'numbers' ? 'navLink active' : 'navLink'
                }
                aria-current='page'
                to='numbers'
              >
                Numbers
              </Link>
            </li>
            <li>
              <Link
                className={
                  splitLocation[1] === 'cards' ? 'navLink active' : 'navLink'
                }
                aria-current='page'
                to='cards'
              >
                Cards
              </Link>
            </li>
          </ul>
          <button className='btn-log' onClick={() => logOut()}>
            LogOut
          </button>
        </>
      ) : (
        <Link className='btn-log' to='login' onClick={() => setOpenModal(true)}>
          LogIn
        </Link>
      )}
    </div>
  );
};

export default NavBar;
