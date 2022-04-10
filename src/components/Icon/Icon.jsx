import work from '../../images/icon-work.svg';
import play from '../../images/icon-play.svg';
import study from '../../images/icon-study.svg';
import exercise from '../../images/icon-exercise.svg';
import social from '../../images/icon-social.svg';
import selfCare from '../../images/icon-self-care.svg';

const Icon = ({ title }) => {
  switch (title) {
    case 'Work':
      return <img className='card__icon' src={work} alt={title} />;
    case 'Play':
      return <img className='card__icon' src={play} alt={title} />;
    case 'Study':
      return <img className='card__icon' src={study} alt={title} />;
    case 'Exercise':
      return <img className='card__icon' src={exercise} alt={title} />;
    case 'Social':
      return <img className='card__icon' src={social} alt={title} />;
    case 'Self Care':
      return <img className='card__icon' src={selfCare} alt={title} />;
    default:
      return <div />;
  }
};

export default Icon;
