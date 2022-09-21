import React, { useState } from 'react';
import CheckAnswer from '../components/Numbers/CheckAnswer';
import AboutGame from '../components/Numbers/AboutGame';
import NewNumber from '../components/Numbers/NewNumber';
import './Numbers.css';

const Numbers = () => {
  const [numbers, setNumbers] = useState([0]);
  const [play, setPlay] = useState(false);
  const [info, setInfo] = useState(false);
  const [count, setCount] = useState(3);
  const [stop, setStop] = useState(false);
  const [result, setResult] = useState('');
  const [gameStatus, setGameStatus] = useState({
    play: false,
    stop: false,
    result: '',
  });

  const addNumber = (count: Number) => {
    let arr = [];
    for (let i = 0; i < count; i++) {
      let num = Math.trunc(Math.random() * 9 + 1);
      arr.push(num);
    }
    setNumbers(arr);
  };

  const playGame = () => {
    setPlay(true);
    setGameStatus({ ...gameStatus });
    addNumber(count);
  };

  return (
    <>
      <div className={`playGameNumbers ${play && 'hide'}`}>
        <h3>Numbers</h3>
        <div>
          Test your math skills and add the numbers correctly. Add numbers and
          enjoy the game.
        </div>
        <button type='button' onClick={() => playGame()}>
          Play
        </button>
      </div>
      <div className={`numbersGame ${play && 'show'}`}>
        <CheckAnswer
          setResult={setResult}
          setCount={setCount}
          setStop={setStop}
          count={count}
          numbers={numbers}
          playGame={playGame}
          setInfo={setInfo}
        />
        <div className='numbers'>
          {numbers.map((el, ind) => (
            <NewNumber key={ind} num={el} stop={stop} />
          ))}
          {stop ? (
            <div className='endGame'>
              <div>{result}</div>
            </div>
          ) : (
            <AboutGame info={info} setInfo={setInfo} />
          )}
        </div>
      </div>
    </>
  );
};

export default Numbers;
