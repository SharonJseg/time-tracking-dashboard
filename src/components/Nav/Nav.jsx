import './Nav.css';

const Nav = ({ buttonArray, onButtonClick, time }) => {
  const onClickHandler = (buttonName) => {
    onButtonClick(buttonName.target.textContent);
  };

  return (
    <nav className='dashboard__nav'>
      <ul className='dashboard__nav-wrapper'>
        {buttonArray.map((buttonName, index) => (
          <li key={index}>
            <button
              className={
                time === buttonName
                  ? 'dashboard__nav-button text-m active'
                  : 'dashboard__nav-button text-m'
              }
              onClick={onClickHandler}
            >
              {buttonName}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
