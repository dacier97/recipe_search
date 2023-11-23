import React, { useEffect, useRef, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Spinner from "../components/Spinner";
import AuthContext from "../context/auth";

import { Banner1, Banner2, Banner3, Banner4, Banner5 } from "../images";

const images = [Banner1, Banner2, Banner3, Banner4, Banner5];

const Login = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const navigate = useNavigate();
  const { isAuthenticated, onLogine } = useContext(AuthContext);

  const checkIfUserIsAuthRef = useRef();

  const checkIfUserIsAuth = () => {
    if (isAuthenticated) {
      navigate("/search");
    } else {
      setIsLoading(false);
    }
  };

  checkIfUserIsAuthRef.current = checkIfUserIsAuth;

  useEffect(() => {
    checkIfUserIsAuthRef?.current()?.catch(null);
  }, []);

  const handleSubmitForm = (evt) => {
    evt.preventDefault();

    if (name?.length && email?.length) {
      onLogine(name, email);
      navigate("/search");
    }
  };

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 h-screen w-full">
      <div className="hidden sm:block">
        <img
          src={images[Math.floor(Math.random() * images.length)]}
          alt="Hero"
          className="w-full object-cover h-full "
        />
      </div>

      <div className="bg-gray-300 flex flex-col justify-center">
        <form
          onSubmit={handleSubmitForm}
          className="max-w-[400px] w-full mx-auto bg-gray-900 p-8  px-8 rounded-lg"
        >
          <h2 className="text-4xl dark:text-white font-bold text-center">
            Sing-In
          </h2>
          <div className="flex flex-col text-gray-400 py-2">
            <label className="flex-col flex text-sm text-gray-500 my-2">
              Nombre
              <input
                onChange={({ target: { value } }) => setName(value)}
                className="rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
                type="name"
              />
            </label>
          </div>

          <div className="flex flex-col text-gray-400 py-2">
            <label className="flex-col flex text-sm text-gray-500">
              Correo Electronico
              <input
                onChange={({ target: { value } }) => setEmail(value)}
                className="rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
                type="email"
              />
            </label>
          </div>
          <button
            className="w-full my-5 py-2 bg-teal-500 shadow-lg shadow-teal-500/50 hover:shadow-teal-500/30 text-white font-semibold rounded-lg "
            type="submit"
          >
            Acceder
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
