import { Formik, Form, Field, ErrorMessage } from "formik";
import { useId, useState } from "react";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";
import css from "./RegistrationForm.module.css";
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";

const initialValues = {
  name: "",
  email: "",
  password: "",
};

const RegistrationSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Must be a valid email!").required("Required"),
  password: Yup.string()
    .min(7, "Password must be at least 7 characters")
    .required("Required"),
});

const RegistrationForm = () => {
  const usernameId = useId();
  const emailId = useId();
  const passwordId = useId();
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);

  const handleRegistrationSubmit = (values, actions) => {
    dispatch(register(values));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleRegistrationSubmit}
      validationSchema={RegistrationSchema}
    >
      <Form className={css["form-container"]}>
        <label htmlFor={usernameId}>Name</label>
        <Field type="text" name="name" id={usernameId} />
        <ErrorMessage
          name="name"
          component="span"
          className={css["error-message"]}
        />
        <label htmlFor={emailId}>Email</label>
        <Field type="email" name="email" id={emailId} />
        <ErrorMessage
          name="email"
          component="span"
          className={css["error-message"]}
        />
        <label htmlFor={passwordId}>Password</label>
        <div className={css["password-div"]}>
          <Field
            type={showPassword ? "text" : "password"}
            name="password"
            id={passwordId}
          />
          <span onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? <FaRegEyeSlash /> : <FaRegEye />}
          </span>
        </div>
        <ErrorMessage
          name="password"
          component="span"
          className={css["error-message"]}
        />

        <button type="submit">Registration</button>
      </Form>
    </Formik>
  );
};

export default RegistrationForm;
