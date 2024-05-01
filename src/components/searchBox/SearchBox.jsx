import css from "./SearchBox.module.css";
import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "../../redux/filtersSlice";
import { selectNameFilter } from "../../redux/selectors";

const SearchBox = () => {
  const dispatch = useDispatch();
  const inputValue = useSelector(selectNameFilter);

  const handleChangeSearch = (e) => {
    dispatch(changeFilter(e.target.value));
  };
  return (
    <div className={css.search}>
      <p>Find contacts by name</p>
      <input
        type="text"
        value={inputValue}
        onChange={handleChangeSearch}
        placeholder="Search..."
      />
    </div>
  );
};

export default SearchBox;
