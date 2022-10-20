import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { LoginUser, reset } from "../features/authSlice";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, isError, isSuccess, isLoading, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (user || isSuccess) {
      navigate("/dashboard");
    }
    dispatch(reset());
  }, [user, isSuccess, dispatch, navigate]);

  const Auth = (e) => {
    e.preventDefault();
    dispatch(LoginUser({ email, password }));
  };

  return (
    <section className=" text-black w-auto h-auto bg-dark1 min-h-screen flex flex-col justify-center items-center p-4 gap-4">
      <div className="w-auto h-auto flex bg-dark4 justify-start items-center p-4 gap-2 rounded-lg flex-col shadow-2xl">
        <form onSubmit={Auth} className="">
          {isError && (
            <p className="flex items-center justify-center font-medium">
              {message}
            </p>
          )}
          <h1 className="font-medium text-4xl flex justify-center items-center p-4 gap-2">
            Sign In
          </h1>
          <div className="font-medium text-xl p-2">
            <label className="uppercase">Email</label>
            <div className="m-2">
              <input
                type="text"
                className="-m-2 text-white rounded-lg p-2 flex justify-center items-center"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
              />
            </div>
          </div>
          <div className="font-medium text-xl p-2">
            <label className="uppercase">Password</label>
            <div className="m-2">
              <input
                type="password"
                className="-m-2 rounded-lg p-2 flex justify-center items-center"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="******"
              />
            </div>
          </div>
          <div className="p-2 flex items-center justify-center m-2">
            <button
              type="submit"
              className="p-2 font-medium bg-dark1 text-white w-48 h-auto rounded-lg"
            >
              {isLoading ? "Loading..." : "Login"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Login;
