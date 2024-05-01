import { ErrorMessage, Field, Form, Formik } from "formik";
import { useId } from "react";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import css from "./ContactForm.module.css";
import { addContact } from "../../redux/contactsOps";

const initialValues = {
  name: "",
  number: "",
};

const ContactSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too short!")
    .max(50, "Too long!")
    .required("Required"),
  number: Yup.string()
    .min(3, "Too short!")
    .max(50, "Too long!")
    .required("Required"),
});

const ContactForm = () => {
  const contactNameId = useId();
  const contactNumberId = useId();
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    actions.resetForm();
    const { name, number, id } = values;
    const newContact = { name, number, id };
    dispatch(addContact(newContact));
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={ContactSchema}
    >
      <Form className={css.form}>
        <label htmlFor={contactNameId}>Name</label>
        <Field type="text" name="name" id={contactNameId} />
        <ErrorMessage className={css.error} name="name" component="span" />
        <label htmlFor={contactNumberId}>Number</label>
        <Field type="number" name="number" id={contactNumberId} />
        <ErrorMessage className={css.error} name="number" component="span" />
        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
