import { AuthNav } from "../authNav/AuthNav";
import UserMenu from "../userMenu/UserMenu";
import Navigation from "../navigation/Navigation";
import css from "./AppBar.module.css";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";

const AppBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <header className={css["header-container"]}>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
};

export default AppBar;
