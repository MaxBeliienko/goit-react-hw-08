import { useSelector } from "react-redux";
import { selectUser } from "../../redux/auth/selectors";
import { selectContacts } from "../../redux/contacts/selectors";

const HomePageLoggedIn = () => {
  const { name } = useSelector(selectUser);
  const contacts = useSelector(selectContacts);
  return (
    <div>
      <h1>Hi, {name}</h1>
      <p>
        This is your phone book of contacts. Our application will allow you to
        save important contacts and access them from any device.
      </p>
      <p>You currently have {contacts.length} saved contacts.</p>
    </div>
  );
};

export default HomePageLoggedIn;
