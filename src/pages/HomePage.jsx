import DocumentTitle from "../components/DocumentTitle";
import { useSelector } from "react-redux";
import { selectLoggedIn } from "../redux/auth/selectors";
import HomePageLoggedIn from "../components/homePageLoggedIn/HomePageLoggedIn";
import HomePageAnonim from "../components/homePageAnonim/HomePageAnonim";

const HomePage = () => {
  const loggedIn = useSelector(selectLoggedIn);
  return (
    <div>
      <DocumentTitle>Home</DocumentTitle>
      {loggedIn ? <HomePageLoggedIn /> : <HomePageAnonim />}
    </div>
  );
};

export default HomePage;
