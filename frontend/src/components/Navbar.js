/** @format */

import { Link } from "react-router-dom";
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";

const Navbar = () => {
  const { logout } = useLogout();
  const { user } = useAuthContext();

  const handleClick = () => {
    logout();
  };

  return (
    <header>
      <div className="container flex items-center justify-between px-6 md:px-20 py-5 ">
        <Link to="/">
          <h1 className="font-bold text-xl">
            Workout <span className="text-[#1fb84e]">B</span>uddy
          </h1>
        </Link>
        <nav className="flex ">
          {user && (
            <div className="font-medium space-x-4">
              <span>Welcome!</span>
              <button onClick={handleClick}>Log out</button>
            </div>
          )}
          {!user && (
            <div className="font-medium space-x-4">
              <Link to="/login">Login</Link>
              <Link to="/signup">Signup</Link>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
