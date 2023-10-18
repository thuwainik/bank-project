import instance from ".";
import jwtDecode from "jwt-decode";

const storeToken = (token) => localStorage.setItem("token", token);
const checkToken = () => {
  const token = localStorage.getItem("token");
  if (token) {
    const decode = jwtDecode(token);
    const currentTime = Date.now() / 1000;
    if (decode.exp < currentTime) {
      localStorage.removeItem("token");
      return false;
    }
    return true;
  } else {
    return false;
  }
};
const login = async (userInfo) => {
  const { data } = await instance.post(
    "/mini-project/api/auth/login",
    userInfo
  );
  storeToken(data.token);
  return data;
};

const register = async (userInfo) => {
  const formDate = new FormData();
  for (let key in userInfo) formDate.append(key, userInfo[key]);

  const { data } = await instance.post(
    "/mini-project/api/auth/register",
    formDate
  );
  storeToken(data.token);
  return data;
};

const myProfile = async () => {
  const { data } = await instance.get("/mini-project/api/auth/me");
  return data;
};

const myTransctions = async () => {
  const { data } = await instance.get("/mini-project/api/transactions/my");
  return data;
};

const getAllUsers = async () => {
  const { data } = await instance.get("/mini-project/api/auth/users");
  return data;
};
const getUserbyID = async (userId) => {
  const { data } = await instance.get(`/mini-project/api/auth/user/${userId}`);
  return data;
};

export { login, register, myProfile, myTransctions, getAllUsers, getUserbyID };
