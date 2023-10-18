import { useMutation } from "@tanstack/react-query";
import React, { useState } from "react";
import { register } from "../api/auth";
import { useNavigate } from "react-router";

const Register = () => {
  const [userInfo, setUserInfo] = useState({});
  const navigate = useNavigate();
  const { mutate: registerFn } = useMutation({
    mutationKey: ["register"],
    mutationFn: () => register(userInfo),
    onSuccess: () => navigate("/"),
  });

  const handleChange = (e) => {
    if (e.target.name === "image") {
      setUserInfo({ ...userInfo, [e.target.name]: e.target.files[0] });
    } else {
      setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Add register logic here
    registerFn();
  };

  return (
    <div className="">
      <div className="">
        <h2 className="">Register</h2>
        <form onSubmit={handleFormSubmit}>
          <div className="">
            <label htmlFor="name" className="">
              UserName
            </label>
            <input
              type="text"
              id="username"
              name="username"
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
              type="password"
              id="password"
              name="password"
              onChange={handleChange}
              className=""
              required
            />
          </div>
          <div className="">
            <label htmlFor="image" className="">
              Profile Image
            </label>
            <input
              type="file"
              id="image"
              name="image"
              onChange={handleChange}
              className=""
              required
            />
          </div>
          <div className="">
            <button type="submit" className="">
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
