import Cookies from "js-cookie";
import { NavLink, useNavigate } from "react-router-dom";

const Navbar = ({ isLoggedIn, setIsLoggedIn }) => {

    const navigate = useNavigate();
  return (
    <nav className="flex items-center justify-between flex-wrap bg-blue-500 p-6">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <span className="font-semibold text-xl tracking-tight">Todo App</span>
      </div>
      <div className="block lg:hidden">
        {/* Hamburger menu for mobile */}
        <button
          className="flex items-center px-3 py-2 border rounded text-blue-200 border-blue-400 hover:text-white hover:border-white"
          onClick={() => toggleNav()}
        >
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div className="text-sm lg:flex-grow">
          {/* Navlinks */}
          {isLoggedIn ? (
            <>
              {/* <NavLink
                to="/add-todo"
                className="block mt-4 lg:inline-block lg:mt-0 text-blue-200 hover:text-white mr-4"
              >
                Add Todo
              </NavLink> */}
              {/* <NavLink
                to="/todo"
                className="block mt-4 lg:inline-block lg:mt-0 text-blue-200 hover:text-white"
              >
                Todo
              </NavLink> */}
              <button
                onClick={()=>{
                    Cookies.remove("accessToken");
                    Cookies.remove("refreshToken");
                    setIsLoggedIn(false);
                    navigate("/login");
                }}
                className="ml-[40rem] block mt-4 lg:inline-block lg:mt-0 text-blue-200 hover:text-white"
              >
                Logout
              </button>

            </>
          ) : (
            <>
              <NavLink
                to="/signup"
                className="block mt-4 lg:inline-block lg:mt-0 text-blue-200 hover:text-white mr-4"
              >
                Sign Up
              </NavLink>
              <NavLink
                to="/login"
                className="block mt-4 lg:inline-block lg:mt-0 text-blue-200 hover:text-white mr-4"
              >
                Login
              </NavLink>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
