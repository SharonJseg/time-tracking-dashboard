import { useState } from 'react';
import './App.css';

import Card from '../Card/Card';

import user from '../../images/image-jeremy.png';

import { CARDS, TIME } from '../../utils/constants';

const App = () => {
  const [time, setTime] = useState('Weekly');

  return (
    <>
      <section className='dashboard'>
        <div className='dashboard__user'>
          <div className='dashboard__user-details'>
            <img className='dashboard__user-image' src={user} alt='user' />
            <p className='dashboard__user-title text-s'>Report for</p>
            <h1 className='dashboard__user-name heading-m'>Jeremy Robson</h1>
          </div>
          <nav className='dashboard__nav'>
            <ul className='dashboard__nav-wrapper'>
              <li>
                <button className='dashboard__nav-button text-m'>Daily</button>
              </li>
              <li>
                <button className='dashboard__nav-button text-m'>Weekly</button>
              </li>
              <li>
                <button className='dashboard__nav-button text-m'>
                  Monthly
                </button>
              </li>
            </ul>
          </nav>
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
    </>
  );
};

export default App;
