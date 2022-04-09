import data from './data.json';

const COLORS = [
  { title: 'Work', color: 'hsl(15, 100%, 70%)' },
  { title: 'Play', color: 'hsl(195, 74%, 62%)' },
  { title: 'Study', color: 'hsl(348, 100%, 68%)' },
  { title: 'Exercise', color: 'hsl(145, 58%, 55%)' },
  { title: 'Social', color: 'hsl(264, 64%, 52%)' },
  { title: 'Self Care', color: 'hsl(43, 84%, 65%)' },
];

export const CARDS = data.map((el, i) => {
  return { title: el.title, timeframes: el.timeframes, color: COLORS[i].color };
});

export const TIME = ['Daily', 'Weekly', 'Monthly'];
