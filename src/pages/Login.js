import { useMutation } from "@tanstack/react-query";
import React, { useState } from "react";
import { login } from "../api/auth";
import { useNavigate } from "react-router";
import UserContext from "../context/UserContext";
import { useContext } from "react";

const Login = () => {
  const [userInfo, setUserInfo] = useState({});
  const navigate = useNavigate();
  const [user, setUser] = useContext(UserContext);
  const { mutate: loginFn } = useMutation({
    mutationKey: ["login"],
    mutationFn: () => login(userInfo),
    onSuccess: () => {
      setUser(true);
      navigate("/");
    },
    onError: () => {
      alert("Wrong username or Password");
    },
  });
  const handleChange = (e) => {
    setUserInfo((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Add login logic here
    loginFn();
  };

  return (
    <div className="">
      <div className="">
        <h2 className="">Login</h2>
        <form onSubmit={handleFormSubmit}>
          <div className="">
            <label htmlFor="email" className="">
              User Name
            </label>
            <input
              //   placeholder="Write ur UserName..."
              type="text"
              name="username"
              id="username"
              onChange={handleChange}
              className=""
              required
            />
          </div>
          <div className="">
            <label htmlFor="password" className="">
              Password
            </label>
            <input
              name="password"
              type="password"
              id="password"
              onChange={handleChange}
              className=""
              required
            />
          </div>
          <div className="">
            <button type="submit" className="">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
