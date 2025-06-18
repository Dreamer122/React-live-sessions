import React from "react";
import { NavLink, Link, useNavigate } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { setLoading, logout } from "../../Redux/Features/authSlice";
import { account } from "../../lib/appwrite";
import toast from "react-hot-toast";
import { Menu, X } from "lucide-react";

export const Navbar = () => {
  const { userSession, loading } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  const logoutSession = async () => {
    try {
      dispatch(setLoading(true));
      await account.deleteSession(userSession.$id);
      dispatch(logout());
      toast.success("logout successfully");
      navigate("/login");
    } catch (error) {
      toast.error("error occured " + error.message);
    } finally {
      dispatch(setLoading(false));
    }
  };

  return (
    <header>
      <nav className="bg-white border-b-2 border-black px-4 lg:px-6 py-3">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <Link to="/" className="flex items-center">
            <div className="w-8 h-8 bg-black rounded-sm flex items-center justify-center mr-3">
              <span className="text-white font-bold text-lg">B</span>
            </div>
            <span className="text-2xl font-bold text-black">
              Blog Space
            </span>
          </Link>
          
          <div className="flex items-center lg:order-2">
            {userSession ? (
              <>
                <Link
                  to={`/dashboard/${userSession.userId}`}
                  className="text-black hover:bg-black hover:text-white transition-colors duration-200 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 border border-black"
                >
                  Dashboard
                </Link>
                <button
                  onClick={logoutSession}
                  disabled={loading}
                  className="text-white bg-black hover:bg-gray-800 transition-colors duration-200 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 disabled:opacity-50"
                >
                  {loading ? "Signing out..." : "Logout"}
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="text-black hover:bg-black hover:text-white transition-colors duration-200 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 border border-black"
                >
                  Log in
                </Link>
                <Link
                  to="/signup"
                  className="text-white bg-black hover:bg-gray-800 transition-colors duration-200 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2"
                >
                  Sign Up
                </Link>
              </>
            )}

            <button
              data-collapse-toggle="mobile-menu-2"
              type="button"
              className="inline-flex items-center p-2 ml-1 text-black rounded-lg lg:hidden hover:bg-black hover:text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-black"
              aria-controls="mobile-menu-2"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <Menu className="w-6 h-6" />
            </button>
          </div>
          
          <div
            className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
            id="mobile-menu-2"
          >
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 font-semibold transition-colors duration-200 lg:p-0 ${
                      isActive
                        ? "text-black underline decoration-2 underline-offset-4"
                        : "text-gray-700 hover:text-black"
                    }`
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 font-semibold transition-colors duration-200 lg:p-0 ${
                      isActive
                        ? "text-black underline decoration-2 underline-offset-4"
                        : "text-gray-700 hover:text-black"
                    }`
                  }
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 font-semibold transition-colors duration-200 lg:p-0 ${
                      isActive
                        ? "text-black underline decoration-2 underline-offset-4"
                        : "text-gray-700 hover:text-black"
                    }`
                  }
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};