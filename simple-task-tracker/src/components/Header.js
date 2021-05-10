const Header = ({ title, onClick }) => {
  return (
    <header className="header">
      <h1> {title}</h1>
      <button className="button header__add-task-btn" onClick={onClick}>
        Add
      </button>
    </header>
  );
};

export default Header;
