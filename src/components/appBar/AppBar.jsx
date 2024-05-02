import { AuthNav } from "../authNav/AuthNav";
import Navigation from "../navigation/Navigation";
import css from "./AppBar.module.css";

const AppBar = () => {
  return (
    <header className={css["header-container"]}>
      <Navigation />
      <AuthNav />
    </header>
  );
};

export default AppBar;
