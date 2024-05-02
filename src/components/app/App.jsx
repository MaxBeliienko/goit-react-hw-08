import "./App.css";
// import ContactForm from "../contactForm/ContactForm";
// import ContactList from "../contactList/ContactList";
// import SearchBox from "../searchBox/SearchBox";
// import { useDispatch, useSelector } from "react-redux";
import { lazy, useEffect } from "react";
// import { fetchContacts } from "../../redux/contactsOps";
// import { selectError, selectLoading } from "../../redux/selectors";
import Layout from "../Layout";
import { Route, Routes } from "react-router-dom";
import RestrictedRoute from "../RestrictedRoute";

const HomePage = lazy(() => import("../../pages/HomePage"));
const RegistrationPage = lazy(() => import("../../pages/RegistrationPage"));
const LoginPage = lazy(() => import("../../pages/LoginPage"));
const ContactsPage = lazy(() => import("../../pages/ContactsPage"));

function App() {
  // const dispatch = useDispatch();
  // const error = useSelector(selectError);
  // const loading = useSelector(selectLoading);

  // useEffect(() => {
  //   dispatch(fetchContacts());
  // }, [dispatch]);

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/register"
          element={
            <RestrictedRoute
              redirectTo="/contacts"
              component={<RegistrationPage />}
            />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<LoginPage />} />
          }
        />
        <Route path="/contacts" element={<ContactsPage />} />
        <Route path="*" element={<p>Not Found</p>} />
      </Routes>

      {/* <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      {error && <p>Something went wrong!</p>}
      {loading && <p>Loading...</p>}
      <ContactList /> */}
    </Layout>
  );
}

export default App;
