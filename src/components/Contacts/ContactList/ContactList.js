import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import {
  deleteContact,
  fetchContacts,
} from "../../../redux/contacts-operations";
import Contact from "../Contact/Contact";
import s from "./ContactList.module.css";
import { getVisibleContacts } from "../../../redux/selectors";

function ContactList() {
  const contacts = useSelector(getVisibleContacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <ul className={s.list}>
      {contacts.map(({ id, name, number }) => (
        <Contact
          key={id}
          id={id}
          name={name}
          number={number}
          onDeleteContact={(id) => dispatch(deleteContact(id))}
        />
      ))}
    </ul>
  );
}

export default ContactList;
