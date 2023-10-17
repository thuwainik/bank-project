import React, { useState } from "react";

const Withdraw = ({ show, onClose, onSave }) => {
  const [title, setTitle] = useState("");
  const [topics, setTopics] = useState([]);
  const [body, setBody] = useState("");

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleTopicChange = (e, index) => {
    const updatedTopics = [...topics];
    updatedTopics[index] = e.target.value;
    setTopics(updatedTopics);
  };

  const handleBodyChange = (e) => {
    setBody(e.target.value);
  };

  const handleAddTopic = () => {
    setTopics([...topics, ""]);
  };

  const handleRemoveTopic = (index) => {
    const updatedTopics = [...topics];
    updatedTopics.splice(index, 1);
    setTopics(updatedTopics);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    Withdraw();
    setTitle("");
    setTopics([]);
    setBody("");
  };

  if (!show) {
    return null;
  }

  return (
    <div className="">
      <div className="">
        <h2 className="">Withdraw</h2>
        <form onSubmit={handleFormSubmit}>
          <div className="">
            <label htmlFor="title" className="">
              Title
            </label>
            <input
              type=""
              id=""
              value={title}
              onChange={handleTitleChange}
              className=""
              required
            />
          </div>
          <div className="">
            <label htmlFor="topics" className="">
              Topics
            </label>
            {topics.map((topic, index) => (
              <div key={index} className="">
                <input
                  type="text"
                  value={topic}
                  onChange={(e) => handleTopicChange(e, index)}
                  className=""
                  required
                />
                <button
                  type="button"
                  onClick={() => handleRemoveTopic(index)}
                  className=""
                >
                  Remove
                </button>
              </div>
            ))}
            <button type="button" onClick={handleAddTopic} className="">
              Add Topic
            </button>
          </div>
          <div className="">
            <label htmlFor="body" className="">
              Body
            </label>
            <textarea
              id="body"
              value={body}
              onChange={handleBodyChange}
              className=""
              rows={4}
              required
            />
          </div>
          <div className="">
            <button type="submit" className="">
              Save
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

export default Withdraw;
