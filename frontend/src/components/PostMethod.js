import React, { useState } from "react";
import axios from "axios";

const PostMethod = () => {
  const [newData, setNewData] = useState("");

  const handleInputChange = (e) => {
    setNewData(e.target.value)
  }

  const postDatas = async () => {
    const object = { name: newData };
    const response = await axios.post("http://localhost:3200", object);
    console.log("response", response.data)
  };

  return (
    <div>
        <input type="text" value={newData} onChange={handleInputChange} /> 
      <button onClick={postDatas}>Post now</button>
    </div>
  );
};

export default PostMethod;
