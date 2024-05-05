import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../redux/auth/selectors";
import { logOut } from "../../redux/auth/operations";
import css from "./UserMenu.module.css";

const UserMenu = () => {
  const { name } = useSelector(selectUser);
  const dispatch = useDispatch();
  const handleLogOutClick = () => {
    dispatch(logOut());
  };

  return (
    <div className={css["user-menu-container"]}>
      <p>Welcome, {name} </p>
      <button type="button" onClick={handleLogOutClick}>
        Log Out
      </button>
    </div>
  );
};

export default UserMenu;
