import { useContext } from "react";
import { AuthContext } from "../../../Api/Context/AuthProvider";
import useUserRoles from "../../../Hooks/UseUserRole";
import { useQuery } from "@tanstack/react-query";
import SingleDecoration from "./SingleDecorator";

const SoundSystem = () => {
  const { user } = useContext(AuthContext);
  const vendorRole = useUserRoles(user?.email);

  const url = `https://event-guchai-backend.vercel.app/bookings`;

  const { data: bookings = [] } = useQuery({
    queryKey: ["bookings"],
    queryFn: async () => {
      const res = await fetch(url);
      const data = await res.json();
      return data;
    },
  });

  const filteredBookings = bookings.filter((book) => book.decoration !== "");

  return (
    <div>
      {vendorRole.vendorRoles === "decorator" && (
        <>
          {filteredBookings.length === 0 ? (
            <p className="text-3xl font-bold mb-10 mt-5 text-teal-400">
              No sound system bookings available
            </p>
          ) : (
            <>
              <h1 className="text-3xl font-bold mb-10 mt-5">
                Sound System Bookings
              </h1>
              <div className="ml-10 grid grid-cols-2 md:grid-cols-2 sm:grid-cols-1 text-justify">
                {filteredBookings.map((booking) => (
                  <SingleDecoration
                    key={booking.bookingsID}
                    booking={booking}
                  ></SingleDecoration>
                ))}
              </div>
            </>
          )}
        </>
      )}
    </div>
  );
};

export default SoundSystem;
