import css from "./ModalDelete.module.css";

const ModalDelete = ({ confirmDelete, cancelDelete }) => {
  return (
    <div className={css.backdrop}>
      <div className={css["modal-cont"]}>
        <h2>Confirm Deletion</h2>
        <p>Are you sure you want to delete?</p>
        <div className={css["modal-cont-button"]}>
          <button onClick={cancelDelete}>Cancel</button>
          <button onClick={confirmDelete}>Confirm</button>
        </div>
      </div>
    </div>
  );
};

export default ModalDelete;
