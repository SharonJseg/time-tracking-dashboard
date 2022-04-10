import React from 'react';
import './Card.css';

import options from '../../images/icon-ellipsis.svg';
import Icon from '../Icon/Icon';

const Card = ({ title, time, timeframes, color }) => {
  console.log(title);
  return (
    <div className={`card ${color}`}>
      <div className='card__header'>
        <Icon title={title} />
      </div>
      <div className='card__body'>
        <div className='card__type-wrapper'>
          <h3 className='card__type heading-s'>{title}</h3>
          <img className='card__options' src={options} alt='' />
        </div>
        {time === 'Daily' && (
          <div className='card__time-wrapper'>
            <h2 className='card__time heading-l'>
              {timeframes.daily.current}hrs
            </h2>
            <p className='card__previous-time text-s'>
              Last Day - {timeframes.daily.previous}hrs
            </p>
          </div>
        )}
        {time === 'Weekly' && (
          <div className='card__time-wrapper'>
            <h2 className='card__time heading-l'>
              {timeframes.weekly.current}hrs
            </h2>
            <p className='card__previous-time text-s'>
              Last Week - {timeframes.weekly.previous}hrs
            </p>
          </div>
        )}
        {time === 'Monthly' && (
          <div className='card__time-wrapper'>
            <h2 className='card__time heading-l'>
              {timeframes.monthly.current}hrs
            </h2>
            <p className='card__previous-time text-s'>
              Last Month - {timeframes.monthly.previous}hrs
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;
