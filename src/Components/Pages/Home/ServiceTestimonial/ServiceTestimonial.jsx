import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../../Api/Context/AuthProvider";
import useUserRoles from "../../../../Hooks/UseUserRole";

const ServiceTestimonial = () => {
  const user = useContext(AuthContext);
  const roles = useUserRoles(user?.email);
  return (
    <>
      {roles.roles == "user" && (
        <>
          <Link to="/dashboard/customize-plan">
            {" "}
            <button className="btn btn-wide bg-cyan-300 text-xl">
              Wanna customize?
            </button>
          </Link>
        </>
      )}

      <section className="p-6 font-serif text-black mt-10 mb-10 ">
        <div className="container mx-auto grid justify-center grid-cols-2 text-center lg:grid-cols-3">
          <div className="flex flex-col justify-start m-2 lg:m-6">
            <p className="text-4xl font-bold leading-none lg:text-6xl">50+</p>
            <p className="text-sm sm:text-base">Clients</p>
          </div>
          <div className="flex flex-col justify-start m-2 lg:m-6">
            <p className="text-4xl font-bold leading-none lg:text-6xl">89K</p>
            <p className="text-sm sm:text-base">Followers on social media</p>
          </div>
          <div className="flex flex-col justify-start m-2 lg:m-6">
            <p className="text-4xl font-bold leading-none lg:text-6xl">3</p>
            <p className="text-sm sm:text-base">Published books</p>
          </div>
          <div className="flex flex-col justify-start m-2 lg:m-6">
            <p className="text-4xl font-bold leading-none lg:text-6xl">8</p>
            <p className="text-sm sm:text-base">TED talks</p>
          </div>
          <div className="flex flex-col justify-start m-2 lg:m-6">
            <p className="text-4xl font-bold leading-none lg:text-6xl">22</p>
            <p className="text-sm sm:text-base">Years of experience</p>
          </div>
          <div className="flex flex-col justify-start m-2 lg:m-6">
            <p className="text-4xl font-bold leading-none lg:text-6xl">10+</p>
            <p className="text-sm sm:text-base">Workshops</p>
          </div>
        </div>
      </section>
    </>
  );
};
export default ServiceTestimonial;
