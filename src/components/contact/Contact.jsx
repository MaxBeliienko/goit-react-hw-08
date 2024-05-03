import { FaUser } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import css from "./Contact.module.css";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";

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
      <div>
        <button
          type="button"
          onClick={() => {
            console.log("work");
          }}
        >
          Edit
        </button>
        <button type="button" onClick={handleDeleteContact}>
          Delete
        </button>
      </div>
    </>
  );
};

export default Contact;
