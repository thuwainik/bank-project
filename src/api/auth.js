import instance from ".";

const login = async (userInfo) => {
  const { data } = await instance.post(
    "/mini-project/api/auth/login",
    userInfo
  );
  return data;
};

const register = async (userInfo) => {
  const formDate = new FormData();
  for (let key in userInfo) formDate.append(key, userInfo[key]);

  const { data } = await instance.post(
    "/mini-project/api/auth/register",
    formDate
  );
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
