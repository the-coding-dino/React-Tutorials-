import React, { useState } from "react";
import axios from 'axios'

const PostImage = () => {
  const [imgFile, setImgFile] = useState(null);

  const postImages = async () => {
    const imgForm = new FormData();
    imgForm.append('file', imgFile)
    const response = await axios.post('http://localhost:3200/upload', imgForm)
    console.log("response", response.data)
    
  };

  const handleImageChange = (e) => {
    setImgFile(e.target.files[0])
  };

  return (
    <div>
      <input type="file" onChange={handleImageChange} />
      <button onClick={postImages}>Upload</button>
    </div>
  );
};

export default PostImage;
