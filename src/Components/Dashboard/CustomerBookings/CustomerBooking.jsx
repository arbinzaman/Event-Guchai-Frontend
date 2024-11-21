import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../../../Api/Context/AuthProvider";
import { MdDelete } from "react-icons/md";
import toast from "react-hot-toast";

const CustomerBooking = () => {
  const { user } = useContext(AuthContext);

  const url = `https://event-guchai-backend.vercel.app/bookings/${user.email}`;

  const { data: booking = [] } = useQuery({
    queryKey: ["booking"],
    queryFn: async () => {
      const res = await fetch(url);
      const data = await res.json();
      return data;
    },
  });

  
  // handleDeleteEvent
  const handleDeleteEvent = (bookingID ) => {
    console.log(bookingID);
    fetch(`https://event-guchai-backend.vercel.app/bookings/${bookingID }`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.message === "booking cancelled successful") {
          toast.error("booking cancelled successful");
          window.location.reload();
          // const remainingUsers = displayUser.filter(
          //   (ent) => ent.eventID !== eventID
          // );
          // setDisplayUser(remainingUsers);
        }
      });
  };

  return (
    <div>
      <div className="overflow-x-auto">
        {booking.length === 0 ? (
          <p className="text-2xl text-center text-teal-400 mt-10">
            No bookings found
          </p>
        ) : (
          <>
            <h1 className="text-3xl font-bold mb-10 mt-5">Your bookings</h1>
            <table className="table w-full">
              <thead>
                <tr>
                  <th></th>
                  <th>Event Title</th>
                  <th>Customer Email</th>
                  <th>Price</th>
                  <th>Food</th>
                  <th>people</th>
                  <th>Sound System</th>
                  <th>Decoration</th>
                  <th>Media Support</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {booking.map((book, i) => (
                  <tr key={book.id}>
                    <th>{i + 1}</th>
                    <td>{book.eventTitle}</td>
                    <td>{book.customerEmail}</td>
                    <td>{book.price}</td>
                    <td>{book.food}</td>
                    <td>{book.people}</td>
                    <td>{book.sound_system}</td>
                    <td>{book.decoration}</td>
                    <td>{book.media}</td>
                    <td>  <button
                    onClick={() => handleDeleteEvent(book.bookingID )}
                    className=" btn-xs text-lg btn-danger"
                  >
                    <MdDelete className="text-2xl " />
                  </button></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </>
        )}
      </div>
    </div>
  );
};

export default CustomerBooking;
