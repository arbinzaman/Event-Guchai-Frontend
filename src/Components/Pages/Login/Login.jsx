import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { GoogleAuthProvider } from "firebase/auth";
import { AuthContext } from "../../../Api/Context/AuthProvider";
import toast from 'react-hot-toast';




const Login = () => {
  // user name And password Login
  const [error, setError] = useState();
  const { signIn } = useContext(AuthContext);

  // Redirect to current path
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  // console.log(from);


  const handleUserNamePassword = (event) => {
    event.preventDefault();
    const form = event.target;
    // const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;

    console.log( email, password);
    signIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        form.reset();
        toast.success("login success");
        navigate(from, { replace: true });
      })

      .catch((error) => {
        console.error(error);
        setError(error.message);
    
      });
      toast.error(error.message);
  };

  // google login
  const { ProviderLogin } = useContext(AuthContext);
  const googleProvider = new GoogleAuthProvider();
  const handleGoggleSignIn = () => {
    ProviderLogin(googleProvider)
      .then((result) => {
        const user = result.user;

        
        console.log(user);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="text-center">
      <div className="w-full max-w-md mt-20 mb-20 p-8 mx-auto space-y-3 rounded-xl bg-cyan-300 text-black">
        <h1 className="text-2xl font-bold text-center text-black">Login</h1>
        <form
          onSubmit={handleUserNamePassword}
          noValidate=""
          action=""
          className="space-y-6 ng-untouched ng-pristine ng-valid"
        >
          <div className="space-y-1 text-sm">
            <label htmlFor="username" className="block text-black">
              email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="email"
              className="w-full px-4  py-3 rounded-md  bg-light text-black focus:border-cyan-400 bg-white"
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
              className="w-full px-4 py-3 rounded-md  bg-light text-black focus:border-cyan-400 bg-white"
            />
            <div className="flex justify-end text-xs text-black">
              <a rel="noopener noreferrer" href="#">
                Forgot Password?
              </a>
            </div>
          </div>
          <button className="block w-full p-3 text-center rounded-sm text-white bg-base-content">
            Sign in
          </button>
        </form>
        <div className="flex items-center  pt-4 space-x-1">
          <div className="flex-1 h-px sm:w-16 bg-gray-700"></div>
          <p className="px-3 text-sm text-black ">Login with social accounts</p>
          <div className="flex-1 h-px sm:w-16 bg-gray-700"></div>
        </div>
        <div className="flex justify-center space-x-4">
          <button
            onClick={handleGoggleSignIn}
            aria-label="Login with Google"
            type="button"
            className=" text-black flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 dark:border-gray-400 focus:ring-cyan-400"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              className="w-5 h-5 fill-current"
            >
              <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
            </svg>
            <p>Login with Google</p>
          </button>
        </div>
        <p className="text-xs text-center sm:px-6 text-black">
          Don`&apos;`t have an account?
          <Link
            to="/register"
            rel="noopener noreferrer"
            className="underline  text-black"
          >
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
