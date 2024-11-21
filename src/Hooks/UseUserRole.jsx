import { useEffect, useState } from "react";

const useUserRoles = (email) => {
  const [roles, setRoles] = useState([]);
  const [vendorRoles, setVendorRole] = useState([]);
  const [userName, setUserName] = useState([]);
  console.log(roles);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (email) {
      fetch(`https://event-guchai-backend.vercel.app/users/email/${email}`)
        .then((res) => {
          if (!res.ok) {
            throw new Error("Failed to fetch user roles");
          }
          return res.json();
        })
        .then((data) => {
          const processedRoles = data.map((roleObj) => ({
            userName: roleObj.userName,
            role: roleObj.role,
            vendorRole: roleObj.vendorRole
          }));
          // console.log(processedRoles);
          setRoles(processedRoles[0].role);
          setVendorRole(processedRoles[0].vendorRole);
          setUserName(processedRoles[0].userName);
          setIsLoading(false);
        })
        .catch((err) => {
          setError(err.message);
          setIsLoading(false);
        });
    } else {
      setIsLoading(false);
    }
  }, [email]);

  return { roles,vendorRoles,userName, isLoading, error };
};

export default useUserRoles;
