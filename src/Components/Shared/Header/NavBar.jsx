import { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { AuthContext } from "../../../Api/Context/AuthProvider";
import useAdmin from "../../../Hooks/UseAdmin";
import { HiOutlineLogout } from "react-icons/hi";
import { IoLogIn } from "react-icons/io5";
import { MdDashboard } from "react-icons/md";
import { TbChecklist } from "react-icons/tb";
import { RxAvatar } from "react-icons/rx";
import useUserRoles from "../../../Hooks/UseUserRole";
import logo from "../../../assets/New folder/event guchai.png";

const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [isAdmin] = useAdmin(user?.email);
  const location = useLocation();
  const userName = useUserRoles(user?.email);

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch(() => console.error("error"));
  };

  return (
    <div className="font-serif">
      <div className="navbar bg-white text-black">
        {/* Navbar Start */}
        <div className="navbar-start">
          {/* Dropdown Menu for Mobile */}
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-white text-black rounded-box w-52"
            >
              <Link to="/events">
                <li>
                  <a>Events</a>
                </li>
              </Link>
              <Link to="/contactus">
                <li>
                  <a>Contact Us</a>
                </li>
              </Link>
              {isAdmin && (
                <Link to="/dashboard">
                  <li>
                    <a>Dashboard</a>
                  </li>
                </Link>
              )}
            </ul>
          </div>
          <Link to="/">
            <img src={logo} alt="" className="h-24 w-52" />
            {/* <a className="btn btn-ghost text-xl">Eventগুছাই</a> */}
          </Link>
        </div>

        {/* Navbar Center */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <Link to="/events">
              <li>
                <a>Events</a>
              </li>
            </Link>
            <Link to="/contactus">
              <li>
                <a>Contact Us</a>
              </li>
            </Link>
            {user && (
              <>
                <Link to="/dashboard">
                  <li>
                    <a>Dashboard</a>
                  </li>
                </Link>
                <label
                  htmlFor="my-drawer-2"
                  className="btn lg:hidden  drawer-button"
                >
                  <MdDashboard className="text-xl" />
                </label>
              </>
            )}
          </ul>
        </div>

        {/* Navbar End */}
        <div className="navbar-end">
          {user?.uid ? (
            <>
              <span className="">
                {user?.photoURL ? (
                  <img
                    src={user?.photoURL}
                    title={user?.displayName}
                    className="ml-auto h-10 rounded-full"
                    alt=""
                  />
                ) : (
                  <>
                    <Link to="/dashboard">
                      <div className="flex ml-auto gap-4">
                        <p className="">{userName.userName}</p>
                        <RxAvatar className=" h-8 w-10  text-gray-500" />
                      </div>
                    </Link>
                  </>
                )}
              </span>
              <button onClick={handleLogOut} className="gap-5">
                <HiOutlineLogout className="text-2xl " />
              </button>
            </>
          ) : (
            <>
              {location.pathname === "/login" || (
                <Link to="/login" className="btn btn-ghost normal-case text-xl">
                  <IoLogIn className="text-2xl" />
                </Link>
              )}

              {location.pathname === "/register" || (
                <Link to="/register" className="btn btn-ghost normal-case ">
                  <TbChecklist className="text-2xl" />
                </Link>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
