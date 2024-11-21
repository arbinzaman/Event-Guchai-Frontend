import { Link, Outlet } from "react-router-dom";
import { AuthContext } from "../../../Api/Context/AuthProvider";
import NavBar from "../../Shared/Header/NavBar";
import useUserRoles from "../../../Hooks/UseUserRole";
import { useContext } from "react";
import { RxAvatar } from "react-icons/rx";

const DashBoardLayouts = () => {
  const { user } = useContext(AuthContext);
  const vendorRole = useUserRoles(user?.email);
  const roles = useUserRoles(user?.email);
  const userName = useUserRoles(user?.email);
  // console.log(userName.userName);
  return (
    <div className="font-serif">
      <NavBar></NavBar>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col ">
          <Outlet></Outlet>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu p-4 w-80 min-h-full bg-white text-black text-base-content">
            <li className="flex">
              <Link to="/dashboard" className="text-2xl">
                <RxAvatar className="ml-auto h-10 w-10  text-black-500" />
                <p className="font-bold text">{userName?.userName}</p>
                <ul>
                  <li>
                    {" "}
                    <p className="font-bold text-xs">{roles?.roles}</p>
                  </li>
                  <li>
                    {" "}
                    <p className="font-bold text-xs">
                      {vendorRole?.vendorRoles}
                    </p>
                  </li>
                </ul>
              </Link>
            </li>

            {roles.roles == "user" && (
              <li>
                <Link to="/dashboard/my-bookings">My Bookings</Link>
              </li>
            )}

            {roles?.roles == "user" && (
              <>
                <li>
                  <Link to="/dashboard/customize-plan">Customize Plan</Link>
                </li>
              </>
            )}

            {roles?.roles == "admin" && (
              <>
                <li>
                  <Link to="/dashboard/all-users">Users</Link>
                </li>
                <li>
                  <Link to="/dashboard/booking">Bookings</Link>
                </li>
                <li>
                  <Link to="/dashboard/update-event">Update New Event</Link>
                </li>
              </>
            )}

            {vendorRole?.vendorRoles == "sound_system" && (
              <>
                <li>
                  <Link to="/dashboard/sound-system">Sound System</Link>
                  <Link to="/dashboard/pending-works-sound">Pending Works</Link>
                </li>
              </>
            )}
            {vendorRole?.vendorRoles == "decorator" && (
              <>
                <li>
                  <Link to="/dashboard/decorator">Decoration</Link>
                  <Link to="/dashboard/pending-works-decorator">
                    Pending Works
                  </Link>
                </li>
              </>
            )}
            {vendorRole?.vendorRoles == "catering" && (
              <>
                <li>
                  <Link to="/dashboard/catering">Catering</Link>
                  <Link to="/dashboard/pending-works-catering">
                    Pending Works
                  </Link>
                </li>
              </>
            )}
            {vendorRole?.vendorRoles == "media" && (
              <>
                <li>
                  <Link to="/dashboard/media">Media</Link>
                  <Link to="/dashboard/pending-works-media">Pending Works</Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashBoardLayouts;
