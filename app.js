const express = require("express");
const app = express();
const cors = require('cors');
app.use(cors())

app.use(express.json());

const dataRoute = require('./routes/dataRoutes')
const imgRoute = require('./routes/imageRoutes')

app.use(dataRoute)
app.use(imgRoute)



const PORT = 3200;

app.listen(PORT, () => {
  console.log("App is running");
});
