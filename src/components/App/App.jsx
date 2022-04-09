import React from 'react';
import './App.css';

import { CARDS, TIME } from '../../utils/constants';

console.log(CARDS, TIME);

const App = () => {
  return (
    <>
      <section className='dashboard'>
        <div className='dashboard__user'></div>

        {CARDS.map((card, index) => (
          <div className='dashboard__card' key={index}>
            {index}
          </div>
        ))}
      </section>
    </>
  );
};

export default App;
