import { Suspense } from "react";
import AppBar from "./appBar/AppBar";
import css from "./appBar/AppBar.module.css";

const Layout = ({ children }) => {
  return (
    <div>
      <AppBar />
      <Suspense
        fallback={<div className={css["loading-text"]}>Loading...</div>}
      >
        {children}
      </Suspense>
    </div>
  );
};

export default Layout;
