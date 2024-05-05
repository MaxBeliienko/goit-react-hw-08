import DocumentTitle from "../components/DocumentTitle";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../redux/auth/selectors";
import HomePageLoggedIn from "../components/homePageLoggedIn/HomePageLoggedIn";
import HomePageAnonim from "../components/homePageAnonim/HomePageAnonim";

const HomePage = () => {
  const loggedIn = useSelector(selectIsLoggedIn);
  return (
    <div>
      <DocumentTitle>Home</DocumentTitle>
      {loggedIn ? <HomePageLoggedIn /> : <HomePageAnonim />}
    </div>
  );
};

export default HomePage;
