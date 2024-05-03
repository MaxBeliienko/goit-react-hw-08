import { Formik, Form, Field, ErrorMessage } from "formik";
import { useId, useState } from "react";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { login } from "../../redux/auth/operations";
import css from "./LoginForm.module.css";
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";

const LoginSchema = Yup.object().shape({
  email: Yup.string().email("Must be a valid email!").required("Required"),
  password: Yup.string()
    .min(7, "Password must be at least 7 characters")
    .required("Required"),
});

const LoginForm = () => {
  const emailId = useId();
  const passwordId = useId();
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);

  const handleLoginSubmit = (values, actions) => {
    dispatch(login(values));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      onSubmit={handleLoginSubmit}
      validationSchema={LoginSchema}
    >
      <Form className={css["login-container"]}>
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
        <button type="submit">Log In</button>
      </Form>
    </Formik>
  );
};

export default LoginForm;
