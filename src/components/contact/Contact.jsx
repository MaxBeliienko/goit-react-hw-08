import { FaUser } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import ModalDelete from "../modalDelete/ModalDelete";
import css from "./Contact.module.css";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";
import { useState } from "react";

const Contact = ({ contact }) => {
  const [modalDeleteOpen, setModalDeleteOpen] = useState(false);
  const dispatch = useDispatch();
  const { name, number, id } = contact;

  const handleDeleteClick = () => setModalDeleteOpen(true);
  const handleCancelDelete = () => setModalDeleteOpen(false);

  const handleDeleteContact = () => {
    dispatch(deleteContact(id));
    setModalDeleteOpen(false);
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
      <div className={css["contact-button-container"]}>
        <button type="button" onClick={handleDeleteClick}>
          Delete
        </button>
      </div>
      {modalDeleteOpen && (
        <ModalDelete
          confirmDelete={handleDeleteContact}
          cancelDelete={handleCancelDelete}
        />
      )}
    </>
  );
};

export default Contact;
