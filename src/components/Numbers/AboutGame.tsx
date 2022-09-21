import React, { Dispatch, SetStateAction } from 'react';

const AboutGame = ({
  info,
  setInfo,
}: {
  info: boolean;
  setInfo: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <div className={`aboutGame ${info && 'show'}`}>
      <button type='button' onClick={() => setInfo(false)}>
        X
      </button>
      <h4>Game name</h4>
      Test your math skills and add the numbers correctly. Add numbers and enjoy
      the game.
    </div>
  );
};

export default AboutGame;
