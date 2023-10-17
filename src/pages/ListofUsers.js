import { useQuery } from "@tanstack/react-query";
import React from "react";
import { getAllUsers } from "../api/auth";

const ListofUsers = () => {
  const { data: usersList } = useQuery({
    queryKey: ["users"],
    queryFn: getAllUsers,
  });
  return (
    <div className="">
      {usersList?.map((user) => (
        <div key={user.id} className="">
          <img src={user.image} alt="User" className="" />
          <div className="">
            <h3 className="">{user.name}</h3>
            <p className="">{user.email}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ListofUsers;
