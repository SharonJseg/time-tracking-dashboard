import data from './data.json';

const COLORS = [
  { title: 'Work', color: 'orange' },
  { title: 'Play', color: 'blue' },
  { title: 'Study', color: 'red' },
  { title: 'Exercise', color: 'green' },
  { title: 'Social', color: 'purple' },
  { title: 'Self Care', color: 'yellow' },
];

export const CARDS = data.map((el, i) => {
  return { title: el.title, timeframes: el.timeframes, color: COLORS[i].color };
});

export const TIME = ['Daily', 'Weekly', 'Monthly'];
