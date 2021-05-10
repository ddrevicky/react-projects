import { useLocation } from "react-router-dom";

const Header = ({ title, addFormShown, onToggleAddFormShown }) => {
  const location = useLocation();

  return (
    <header className="header">
      <h1> {title}</h1>
      {location.pathname === "/" && (
        <button
          className="button header__add-task-btn"
          onClick={onToggleAddFormShown}
        >
          {addFormShown ? "Hide" : "Add"}
        </button>
      )}
    </header>
  );
};

export default Header;
