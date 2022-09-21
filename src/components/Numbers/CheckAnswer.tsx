import React, { useState, Dispatch } from 'react';

const CheckAnswer = ({
  setResult,
  setCount,
  setStop,
  count,
  numbers,
  playGame,
  setInfo,
}: {
  setResult: Dispatch<React.SetStateAction<string>>;
  setCount: Dispatch<React.SetStateAction<number>>;
  setStop: Dispatch<React.SetStateAction<boolean>>;
  count: number;
  numbers: Array<number>;
  playGame: () => void;
  setInfo: Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [userAnswer, setUserAnswer] = useState('');
  const [winner, setWinner] = useState(false);

  const checkAnswer = () => {
    const result = numbers.reduce((sum, el) => {
      return sum + el;
    }, 0);
    setStop(true);
    if (+userAnswer === result) {
      setResult('You are win!!!');
      setCount(count + 1);
      setWinner(true);
      setUserAnswer('');
    } else {
      setResult('You are lose!!!');
      setWinner(false);
      setCount(3);
      setUserAnswer('');
    }
  };
  const playNextGame = () => {
    setStop(false);
    playGame();
    setWinner(false);
  };

  const playAgain = () => {
    setStop(false);
    playGame();
  };
  return (
    <>
      <div className='score'>Your score: {count - 3}</div>
      <div className='result'>
        <button type='button' onClick={() => setInfo(true)}>
          ?
        </button>
        <input
          type='text'
          placeholder='Enter right answer here'
          value={userAnswer}
          onChange={(event) => setUserAnswer(event.target.value)}
        ></input>
        <button type='button' onClick={() => checkAnswer()}>
          Enter
        </button>
        {winner ? (
          <button type='button' onClick={() => playNextGame()}>
            Next Level
          </button>
        ) : (
          <button type='button' onClick={() => playAgain()}>
            Play Again
          </button>
        )}
      </div>
    </>
  );
};

export default CheckAnswer;
