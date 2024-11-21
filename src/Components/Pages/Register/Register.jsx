import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Api/Context/AuthProvider";
import toast from "react-hot-toast";

const Register = () => {
  const { createUser } = useContext(AuthContext);
  const [firstSelectValue, setFirstSelectValue] = useState("user");
  const [vendorOptionsVisible, setVendorOptionsVisible] = useState(false);

  const handleVendorSelection = (event) => {
    const value = event.target.value;
    setFirstSelectValue(value);
    if (value === "vendor") {
      setVendorOptionsVisible(true);
    } else {
      setVendorOptionsVisible(false);
    }
  };

  // Redirect to current path
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const userName = form.username.value;
    const role = firstSelectValue;
    const vendorRole = form.VendorRole.value;
    const address = form.address.value;
    const phone = form.contact.value;
    const email = form.email.value;
    const password = form.password.value;

    const data = {
      userName,
      address,
      role,
      vendorRole,
      phone,
      email,
      password,
    };
    console.log(data);

    fetch("https://event-guchai-backend.vercel.app/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertId) {
          toast.success("user added success");
          console.log(data);

          createUser(email, password)
            .then((result) => {
              const user = result.user;
              console.log(user);
              form.reset();
              navigate(from, { replace: true });
            })
            .catch((error) => {
              console.error(error);
              toast.error(error.message);
            });
        } else {
          toast.error("user added failed");
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="mt-10 mb-10">
      <div className="mx-auto w-full max-w-md p-8 space-y-3 rounded-xl bg-cyan-300 text-black">
        <h1 className="text-2xl font-bold text-center text-black">Sign Up</h1>
        <form
          onSubmit={handleSubmit}
          noValidate=""
          className="space-y-6 ng-untouched ng-pristine ng-valid"
        >
          <div className="space-y-1 text-sm">
            <label htmlFor="username" className="block text-black">
              User Name
            </label>
            <input
              type="text"
              name="username"
              id="username"
              placeholder="userName"
              className="w-full px-4 py-3 rounded-md dark:border-cyan-400 text-black bg-white"
            />
          </div>
          <div className="space-y-1 text-sm">
            <label htmlFor="address" className="block text-black">
              Address
            </label>
            <input
              type="text"
              name="address"
              id="address"
              placeholder="address"
              className="w-full px-4 py-3 rounded-md dark:border-cyan-400 text-black bg-white"
            />
          </div>
          <div className="space-y-1 text-sm">
            <label htmlFor="contact" className="block text-black">
              Contact Number
            </label>
            <input
              type="number"
              name="contact"
              id="contact"
              placeholder="contact"
              className="w-full px-4 py-3 rounded-md dark:border-cyan-400 text-black bg-white"
            />
          </div>
          <div className="space-y-1 text-sm">
            <label htmlFor="role" className="block text-black">
              Select Role
            </label>
            <select
              className="select w-full bg-white"
              name="role"
              id="role"
              value={firstSelectValue}
              onChange={handleVendorSelection}
            >
              <option value="user">user</option>
              <option value="vendor">vendor</option>
            </select>
          </div>
          {vendorOptionsVisible && (
            <div className="space-y-1 text-sm">
              <label htmlFor="VendorRole" className="block text-black">
                Select Vendor Role
              </label>
              <select
                className="select w-full bg-white"
                name="VendorRole"
                id="VendorRole"
              >
                <option value="">Select Vendor Type</option>
                <option value="sound_system">sound_system</option>
                <option value="decorator">decorator</option>
                <option value="media">media</option>
                <option value="catering">catering</option>
              </select>
            </div>
          )}
          <div className="space-y-1 text-sm">
            <label htmlFor="email" className="block text-black">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              className="w-full px-4 py-3 rounded-md dark:border-gray-700 text-black bg-white"
            />
          </div>

          <div className="space-y-1 text-sm">
            <label htmlFor="password" className="block text-black">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              className="w-full px-4 py-3 rounded-md dark:border-cyan-400 text-black bg-white"
            />
            <div className="flex justify-end text-xs text-black">
              <a rel="noopener noreferrer" href="#">
                Forgot Password?
              </a>
            </div>
          </div>
          <button
            type="submit"
            className="block w-full p-3 text-center rounded-sm text-white bg-base-content"
          >
            Sign Up
          </button>
        </form>

        <p className="text-xs text-center sm:px-6 text-black">
          Already have an account?
          <Link
            to="/login"
            rel="noopener noreferrer"
            className="text-black underline"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
