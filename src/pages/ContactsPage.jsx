import DocumentTitle from "../components/DocumentTitle";
import ContactList from "../components/contactList/ContactList";
import ContactForm from "../components/contactForm/ContactForm";
import SearchBox from "../components/searchBox/SearchBox";
import { useDispatch } from "react-redux";
import { fetchContacts } from "../redux/contacts/operations";
import { useEffect } from "react";

const ContactsPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <DocumentTitle>Your contacts</DocumentTitle>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </div>
  );
};

export default ContactsPage;
