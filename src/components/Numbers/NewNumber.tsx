import React, { useState, useEffect } from 'react';

const NewNumber = ({ num, stop }: { num: number; stop: boolean }) => {
  const [left, setLeft] = useState(50);
  const [top, setTop] = useState(50);

  useEffect(() => {
    if (stop === false) {
      const interval = setInterval(moveNumber, 500, top, left);
      return () => clearInterval(interval);
    }
  }, [top, left, stop]);

  const moveNumber = (top: number, left: number) => {
    let direction = Math.trunc(Math.random() * 4 + 1);
    if (direction === 1 && top < 400) {
      top += 50;
    }
    if (direction === 2 && top > 10) {
      top -= 50;
    }
    if (direction === 3 && left < 420) {
      left += 50;
    }
    if (direction === 4 && left > 20) {
      left -= 50;
    } else {
      moveNumber(top, left);
    }
    setLeft(left);
    setTop(top);
  };

  return (
    <div className='number' style={{ left: `${left}px`, top: `${top}px` }}>
      {num}
    </div>
  );
};

export default NewNumber;
