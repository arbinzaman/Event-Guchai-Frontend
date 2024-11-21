import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import toast from "react-hot-toast";
import { TiTickOutline } from "react-icons/ti";

const PendingWorkSound = () => {
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const url = `https://event-guchai-backend.vercel.app/sound-system`;

  const { data: pendingWork = [], refetch } = useQuery({
    queryKey: ["pendingWork"],
    queryFn: async () => {
      const res = await fetch(url);
      if (!res.ok) {
        throw new Error(`Error: ${res.status}`);
      }
      const data = await res.json();
      console.log(pendingWork);
      return data;
    },
  });

  const handleUpdateStatus = (sound_systemID) => {
    fetch(`https://event-guchai-backend.vercel.app/sound-system/${sound_systemID}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ status: "completed" }),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Error: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        console.log(data);
        if (data.message === "status updated successfully") {
          toast.success("Status updated to completed");
          setIsButtonDisabled(true);
          refetch();
        } else {
          console.error("Failed to update status");
          toast.error("Failed to update status");
        }
      })
      .catch((error) => {
        console.error("Error updating status:", error);
      });
  };

  const filteredPendingWork = pendingWork.filter(
    (work) => work.status !== "done"
  );

  return (
    <div>
      {filteredPendingWork.length === 0 ? (
          <p className="text-3xl font-bold mb-10 mt-5 text-teal-400">No pending work</p>
        ) : (<>
            <h1 className="text-3xl font-bold mb-10 mt-5">Pending Work</h1>
        <div className="ml-10 grid grid-cols-2 md:grid-cols-2 sm:grid-cols-1 text-justify">
          {filteredPendingWork.map((work) => (
            <div
              key={work.sound_systemID}
              className="card mt-5 w-96 bg-white text-black shadow-xl"
            >
              <div className="card-body">
                <h2 className="card-title">{work.quantity}</h2>
                <div className="card-actions justify-end">
                  <button
                    className="btn btn-xs text-xl"
                    onClick={() => handleUpdateStatus(work.sound_systemID)}
                    disabled={isButtonDisabled}
                  >
                    <TiTickOutline />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        </>
      )}
    </div>
  );
};

export default PendingWorkSound;
