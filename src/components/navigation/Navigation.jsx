import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import css from "./Navigation.module.css";

const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <nav className={css["nav-container"]}>
      <NavLink to="/">Phonebook</NavLink>
      {isLoggedIn && <NavLink to="/contacts">Contacts</NavLink>}
    </nav>
  );
};

export default Navigation;
