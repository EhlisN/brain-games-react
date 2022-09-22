import React, { useEffect, useRef, useState } from 'react';
import Card from '../components/Cards/Card';
import { CARDS } from '../components/Cards/cardsData';
import { ICard } from '../components/Cards/ICard';
import './Cards.css';

const Cards = () => {
  const [cards, setCards] = useState<ICard[]>([]);
  const [previousCard, setPreviousCard] = useState(-1);
  const previousIndex = useRef(-1);
  const [count, setCount] = useState(0);
  const [countMatch, setCountMatch] = useState(0);
  const [action, setAction] = useState('');
  const [endGame, setEndGame] = useState(false);
  const [countCard, setCountCard] = useState(true);

  useEffect(() => {
    playGame();
  }, []);

  const playGame = () => {
    CARDS.map((card) => (card.status = ''));
    setCards(CARDS.sort(() => Math.random() - 0.5));
  };

  const playAgain = () => {
    setEndGame(false);
    setCards(cards.sort(() => Math.random() - 0.5));
    setCountMatch(0);
    setCount(0);
    setCountCard(true);
    setPreviousCard(-1);
    setTimeout(() => {
      cards.map((card) => (card.status = 'active'));
      setCards([...cards]);
    }, 0);

    setTimeout(() => {
      cards.map((card) => (card.status = 'unmatch'));
      setCards([...cards]);
    }, 1000);
  };

  const matchCheck = (currentCard: any) => {
    if (cards[currentCard].id === cards[previousCard].id) {
      cards[previousCard].status = 'active matched';
      cards[currentCard].status = 'active matched';
      setPreviousCard(-1);
      setCountMatch(countMatch + 1);
      setCountCard(true);
      if (countMatch === 7) {
        setTimeout(() => {
          setEndGame(true);
        }, 500);
      }
    } else {
      cards[currentCard].status = 'active';
      setCards([...cards]);
      setTimeout(() => {
        setCountCard(true);
        setPreviousCard(-1);
        cards[currentCard].status = 'unmatch';
        cards[previousCard].status = 'unmatch';
        setCards([...cards]);
      }, 1000);
    }
  };

  const clickCard = (index: number) => {
    if (countCard) {
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
            setCountCard(true);
          } else {
            setCountCard(false);
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
    }
  };

  return (
    <>
      <div className={`numbersGame show`}>
        <div className='score'>Your score: {count}</div>
        <button type='button' onClick={() => playAgain()}>
          Play Again
        </button>
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
