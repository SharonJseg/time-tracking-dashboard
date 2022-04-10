import { useState } from 'react';
import './App.css';

import { CARDS, TIME } from '../../utils/constants';
import Nav from '../Nav/Nav';
import Card from '../Card/Card';

import user from '../../images/image-jeremy.png';

const App = () => {
  const [time, setTime] = useState('Weekly');

  const onSetTimeHandler = (str) => {
    setTime(str);
  };

  return (
    <div className='page'>
      <section className='dashboard'>
        <div className='dashboard__user'>
          <div className='dashboard__user-details'>
            <img className='dashboard__user-image' src={user} alt='user' />
            <div>
              <p className='dashboard__user-title text-s'>Report for</p>
              <h1 className='dashboard__user-name heading-m'>Jeremy Robson</h1>
            </div>
          </div>
          <Nav
            buttonArray={TIME}
            time={time}
            onButtonClick={onSetTimeHandler}
          />
        </div>

        {CARDS.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            time={time}
            timeframes={card.timeframes}
            color={card.color}
          />
        ))}
      </section>
    </div>
  );
};

export default App;
