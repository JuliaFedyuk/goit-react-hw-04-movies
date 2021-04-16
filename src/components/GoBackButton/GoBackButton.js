import arrow from '../../images/arrow-left2.png';

const GoBackButton = ({ onClick }) => {
  return (
    <button type="button" onClick={onClick} className="goback-button">
      <img
        src={arrow}
        alt={arrow}
        width="18"
        height="18"
        className="arrow-img"
      />
      Go back
    </button>
  );
};
export default GoBackButton;
