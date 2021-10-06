import LOGO from "logo.png";

const Navbar = () => {
  return (
    <>
      <nav className="d-flex flex-column flex-lg-row justify-content-center align-items-center py-5">
        <div className="d-flex w-75 justify-content-center align-items-center">
          <img src={LOGO} alt="logo" className="navbar-logo" />
        </div>
        <div>Language</div>
      </nav>
      <Announcement />
    </>
  );
};

const Announcement = () => {
  return (
    <div className="d-flex justify-content-center align-items-center font-weight-bold py-1 announcement">
      You dont have an account yet, please create a new account
    </div>
  );
};

export default Navbar;
