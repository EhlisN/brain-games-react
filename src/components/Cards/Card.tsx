import React from 'react';

const Card = ({
  card,
  index,
  clickCard,
}: {
  card: any;
  index: number;
  clickCard: (index: any) => void;
}) => {
  const cardClassName = card.status ? 'active' : '';

  return (
    <div className={`card ${card.status}`} onClick={() => clickCard(index)}>
      <img className='nameCard' src={card.img} alt={card.name} />
    </div>
  );
};

export default Card;
