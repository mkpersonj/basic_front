import NavBar from "./NavBar.js";
import Modal from "./Modal";

const Layout = ({ children, navbar }) => {
  return (
    <>
      {children}

      {navbar && <NavBar></NavBar>}

      <Modal />
    </>
  );
};

export default Layout;
