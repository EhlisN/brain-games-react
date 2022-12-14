import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Context from '../context/context';
import './Main.css';

const Main = () => {
  const imgCards = require('../img/Cards.png');
  const imgNumbers = require('../img/numbers.png');
  const { isLoginUser } = useContext(Context);

  return (
    <div>
      <h2>BRAIN GAMES</h2>
      <div className='game'>
        <div>
          <h3>Numbers</h3>
          <div className='description'>
            Test your math skills and add the numbers correctly. Add numbers and
            enjoy the game.
          </div>
          {isLoginUser ? (
            <Link className='mainLink' aria-current='page' to='numbers'>
              Play
            </Link>
          ) : (
            <h4>Log in for play</h4>
          )}
        </div>
        <img src={imgNumbers} alt='cards' />
      </div>
      <div className='game'>
        <div>
          <h3>Cards</h3>
          <div className='description'>
            An addictive educational game to train your memory and mindfulness
            in which you will look for identical pairs or suitable matches. The
            fewer attempts required, the better the result.
          </div>
          {isLoginUser ? (
            <Link className='mainLink' aria-current='page' to='cards'>
              Play
            </Link>
          ) : (
            <h4>Log in for play</h4>
          )}
        </div>
        <img src={imgCards} alt='cards' />
      </div>
    </div>
  );
};

export default Main;
