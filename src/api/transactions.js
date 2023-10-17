import instance from ".";

const updtProfile = async (img) => {
  const formDate = new FormData();
  formDate.append("image", img);
  instance.put("/mini-project/api/auth/profile", formDate);
};
const depositAmount = async (amount) => {
  instance.put("/mini-project/api/transactions/deposit", amount);
};
const withdrawAmount = async (amount) => {
  instance.put("/mini-project/api/transactions/withdraw", amount);
};
const transferAmount = async ({ amount, username }) => {
  instance.put(`/mini-project/api/transactions/transfer/${username}`, amount);
};
export { updtProfile, depositAmount, withdrawAmount, transferAmount };
