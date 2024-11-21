import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { RiAdminFill } from "react-icons/ri";
import { GrUserWorker } from "react-icons/gr";
import { MdDelete } from "react-icons/md";
import toast from "react-hot-toast";
const AllUsers = () => {
  const [displayUser, setDisplayUser] = useState();
  // console.log(displayUser);
  const url = `https://event-guchai-backend.vercel.app/users`;

  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await fetch(url);
      const data = await res.json();
      return data;
    },
  });

  // handleMakeAdmin
  const handleMakeAdmin = (userID) => {
    fetch(`https://event-guchai-backend.vercel.app/users/admin/${userID}`, {
      method: "PUT",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.message === "User role updated to admin") {
          toast.success("make admin successful");
          refetch();
        }
      });
  };

  const handleMakeVendor = (userID) => {
    fetch(`https://event-guchai-backend.vercel.app/users/${userID}`, {
      method: "PUT",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.message === "User role updated to admin") {
          toast.success("make vendor successful");
          refetch();
        }
      });
  };

  // handleDeleteUser
  const handleDeleteUser = (userID) => {
    fetch(`https://event-guchai-backend.vercel.app/users/${userID}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.message === "User deleted successful") {
          toast.error("user deleted successful");
          // console.log(data.deletedCount);
          window.location.reload();
          const remainingUsers = displayUser.filter(
            (usr) => usr.userID !== userID
          );
          setDisplayUser(remainingUsers);
        }
      });
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-10 mt-5 ">Users</h1>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Admin</th>
              <th>Vendor</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, i) => (
              <tr key={user.userID}>
                <th>{i + 1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  {user?.role !== "admin" && (
                    <button
                      onClick={() => handleMakeAdmin(user.userID)}
                      className=" btn-xs text-lg btn-red"
                    >
                      <RiAdminFill />
                    </button>
                  )}
                </td>
                <td>
                  {user?.role !== "vendor" && (
                    <button
                      onClick={() => handleMakeVendor(user.userID)}
                      className=" btn-xs text-lg"
                    >
                      <GrUserWorker />
                    </button>
                  )}
                </td>
                <td>
                  {user?.role !== "admin" && (
                    <button
                      onClick={() => handleDeleteUser(user.userID)}
                      className=" btn-xs text-lg btn-danger"
                    >
                      <MdDelete />
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;
