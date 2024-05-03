import { NavLink } from "react-router-dom";
import css from "./HomePageAnonim.module.css";

const HomePageAnonim = () => {
  return (
    <div>
      <h1>Hi, Anonim</h1>
      <p>
        This application is created for storing important contacts and accessing
        them from any device. Please{" "}
        {
          <NavLink to="/register" className={css["registr-link"]}>
            register
          </NavLink>
        }{" "}
        and enjoy all the features of the application.
      </p>
    </div>
  );
};

export default HomePageAnonim;
