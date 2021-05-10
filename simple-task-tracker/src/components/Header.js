const Header = ({ title, addFormShown, onToggleAddFormShown }) => {
  return (
    <header className="header">
      <h1> {title}</h1>
      <button
        className="button header__add-task-btn"
        onClick={onToggleAddFormShown}
      >
        {addFormShown ? "Hide" : "Add"}
      </button>
    </header>
  );
};

export default Header;
