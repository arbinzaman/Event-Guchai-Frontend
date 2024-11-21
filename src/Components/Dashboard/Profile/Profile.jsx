import { useContext } from "react";
import { AuthContext } from "../../../Api/Context/AuthProvider";
import useUserRoles from "../../../Hooks/UseUserRole";
import { RxAvatar } from "react-icons/rx";

const Profile = () => {
    const { user } = useContext(AuthContext);
    const VendorRole = useUserRoles(user?.email);
    const roles = useUserRoles(user?.email);
    const userName = useUserRoles(user?.email);
  return (
    <div>
      <div className="p-6 sm:p-12 text-black bg-white text-black ml-10 rounded-md">
        <div className="flex flex-col space-y-4 md:space-y-0 md:space-x-6 md:flex-row">
          <RxAvatar className="self-center flex-shrink-0 w-24 h-24 border rounded-full md:justify-self-start " />
          <div className="flex flex-col">
            <h4 className="text-xl font-semibold text-center md:text-left">
             {userName.userName}
            </h4>
            <h4 className=" text-gray-400 text-center md:text-left">
             {roles.roles}
            </h4>
            <p className="text-gray-400">
             {VendorRole.vendorRoles}
            </p>
          </div>
        </div>
    
      </div>
    </div>
  );
};

export default Profile;
