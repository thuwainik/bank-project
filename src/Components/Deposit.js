import React, { useState } from "react";

const Deposit = ({ show, onClose, onSave }) => {
  const [title, setTitle] = useState("");
  const [topics, setTopics] = useState([]);
  const [amount, setAmount] = useState("");

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleTopicChange = (e, index) => {
    const updatedTopics = [...topics];
    updatedTopics[index] = e.target.value;
    setTopics(updatedTopics);
  };

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    Deposit();
  };

  if (!show) {
    return null;
  }

  return (
    <div className="">
      <div className="">
        <h2 className="">Deposit</h2>
        <form onSubmit={handleFormSubmit}>
          <div className="">
            <label className="">Amount</label>
            <input
              type="number"
              id="depo_amount"
              onChange={handleAmountChange}
              className=""
              required
            />
          </div>
          <div className="">
            <button type="submit" className="">
              Deposit
            </button>
            <button type="button" onClick={onClose} className="">
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Deposit;
