import React, { useRef, useState } from 'react';
import Card from '../components/Cards/Card';
import { CARDS } from '../components/Cards/cardsData';
import { ICard } from '../components/Cards/ICard';
import { imgCards } from '../components/Cards/imgCards';
import './Cards.css';

const Cards = () => {
  const [cards, setCards] = useState<ICard[]>([]);
  const [previousCard, setPreviousCard] = useState(-1);
  const previousIndex = useRef(-1);
  const [count, setCount] = useState(0);
  const [play, setPlay] = useState(false);
  const [countMatch, setCountMatch] = useState(0);
  const [action, setAction] = useState('');
  const [endGame, setEndGame] = useState(false);

  const playGame = () => {
    setCards(CARDS.sort(() => Math.random() - 0.5));
    setPlay(true);
    console.log(imgCards[0]);
  };

  const matchCheck = (currentCard: any) => {
    if (cards[currentCard].id === cards[previousCard].id) {
      cards[previousCard].status = 'active matched';
      cards[currentCard].status = 'active matched';
      setPreviousCard(-1);
      setCountMatch(countMatch + 1);
      if (countMatch === 7) {
        setTimeout(() => {
          setEndGame(true);
        }, 500);
      }
    } else {
      cards[currentCard].status = 'active';
      setCards([...cards]);
      setTimeout(() => {
        setPreviousCard(-1);
        cards[currentCard].status = 'unmatch';
        cards[previousCard].status = 'unmatch';
        setCards([...cards]);
      }, 1000);
    }
  };

  const clickCard = (index: number) => {
    if (index !== previousIndex.current) {
      if (cards[index].status === 'active matched') {
        setAction('Already matched');
        setTimeout(() => {
          setAction('');
        }, 500);
      } else {
        if (previousCard === -1) {
          previousIndex.current = index;
          cards[index].status = 'active';
          setCards([...cards]);
          setPreviousCard(index);
        } else {
          matchCheck(index);
          previousIndex.current = -1;
          setCount(count + 1);
        }
      }
    } else {
      setAction('Card seleted');
      setTimeout(() => {
        setAction('');
      }, 500);
    }
  };

  return (
    <>
      <div className={`playGameNumbers ${play && 'hide'}`}>
        <h3>Cards</h3>
        <div>
          An addictive educational game to train your memory and mindfulness in
          which you will look for identical pairs or suitable matches. The fewer
          attempts required, the better the result.
        </div>
        <button type='button' onClick={() => playGame()}>
          Play
        </button>
      </div>
      <div className={`numbersGame ${play && 'show'}`}>
        <div className='score'>Your score: {count}</div>
        <div className='cards'>
          {endGame ? (
            <div className='endGame'>
              You are win!!!
              <div>{`Your score: ${count}`}</div>
            </div>
          ) : (
            <></>
          )}
          <div className='action'>{action}</div>
          {cards.map((card, index) => {
            return (
              <Card
                key={index}
                card={card}
                index={index}
                clickCard={clickCard}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Cards;
