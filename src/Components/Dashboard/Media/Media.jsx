import { useContext } from "react";
import { AuthContext } from "../../../Api/Context/AuthProvider";
import useUserRoles from "../../../Hooks/UseUserRole";
import { useQuery } from "@tanstack/react-query";
import SingleMedia from "./SingleMedia";

const Media = () => {
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

  const filteredBookings = bookings.filter((book) => book.sound_system !== "");

  return (
    <div>
      {vendorRole.vendorRoles === "media" && (
        <>
          {filteredBookings.length === 0 ? (
            <p className="text-3xl font-bold mb-10 mt-5 text-teal-400">
              No media bookings available
            </p>
          ) : (
            <>
              <h1 className="text-3xl font-bold mb-10 mt-5">
                Media Bookings
              </h1>
              <div className="ml-10 grid grid-cols-2 md:grid-cols-2 sm:grid-cols-1 text-justify">
                {filteredBookings.map((booking) => (
                  <SingleMedia
                    key={booking.bookingsID}
                    booking={booking}
                  ></SingleMedia>
                ))}
              </div>
            </>
          )}
        </>
      )}
    </div>
  );
};

export default Media;
