import { useSelector, useDispatch } from "react-redux";
import { changeFilter } from "../../redux/contacts-actions";
import s from "./Filter.module.css";
import { getFilter } from "../../redux/selectors";

function Filter() {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();
  return (
    <label className={s.label}>
      Find contacts by name
      <input
        type="text"
        className={s.input}
        value={filter}
        onChange={(event) => dispatch(changeFilter(event.target.value))}
      />
    </label>
  );
}

export default Filter;
