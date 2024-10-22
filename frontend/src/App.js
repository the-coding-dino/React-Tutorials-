import React, { useState } from "react";
import axios from 'axios';

function App() {

  const [datas, setDatas] = useState([]);

  const fetchDatas = async () => {
    const response = await axios.get('http://localhost:3200/datas')
    setDatas(response.data)
    console.log("Data", response.data)
  }





  return (
    <div>
      <center>
        <h2>React Frontend</h2>
      </center>
      <br/>
      <button onClick={fetchDatas}>Datas</button>
      <br/>
      {datas && datas.map( (item) => <h4 key={item.id}>{item.name}</h4>    )}
    </div>
  );
}

export default App;
