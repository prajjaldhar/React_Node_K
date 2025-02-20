import axios from "axios";
import React, { useState } from "react";

const App = () => {
  const [formData, setFormData] = useState({
    title: "",
    body: "",
  });
  const [response, setResponse] = useState(null);
  const HandleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const HandleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    try {
      const res = await axios.post(
        "https://jsonplaceholder.typicode.com/posts",
        formData
      );
      setResponse(res.data);
    } catch (error) {
      console.error(error);
    }
    setFormData({
      title: "",
      body: "",
    });
  };
  return (
    <div className="text-center">
      <h2 className="font-bold text-6xl">Post Data to Dummy Api</h2>
      <form onSubmit={HandleSubmit}>
        <label>Title: </label>
        <input
          type="text"
          name="title"
          placeholder="Enter Title"
          value={formData.title}
          onChange={HandleChange}
        />
        <br />
        <label>Body:</label>
        <input
          type="text"
          name="body"
          placeholder="Enter Body"
          value={formData.body}
          onChange={HandleChange}
        />
        <br />
        <button type="submit">Post</button>
      </form>
      {response && (
        <div className="bg-green-500 p-4 rounded-lg text-white">
          <h2 className="font-bold text-2xl">Response:</h2>
          <p>{JSON.stringify(response)}</p>
        </div>
      )}
    </div>
  );
};

export default App;
