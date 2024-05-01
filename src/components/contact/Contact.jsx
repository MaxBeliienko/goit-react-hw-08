import { FaUser } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import css from "./Contact.module.css";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsOps";

const Contact = ({ contact }) => {
  const dispatch = useDispatch();
  const { name, number, id } = contact;

  const handleDeleteContact = () => {
    dispatch(deleteContact(id));
  };
  return (
    <>
      <ul className={css["contact-info"]}>
        <li>
          <FaUser />
          {name}
        </li>
        <li>
          <FaPhoneAlt />
          {number}
        </li>
      </ul>
      <button type="button" onClick={handleDeleteContact}>
        Delete
      </button>
    </>
  );
};

export default Contact;
