const path = require("path");
const fs = require("fs");

app.use(express.json());

const getTodo = () => {
  const filePath = path.join(__dirname, "Data.json");
  const data = fs.readFileSync(filePath, "utf-8");
  return JSON.parse(data);
};

app.get("/", (req, res) => {
  const datas = getTodo();
  res.send(datas);
});

const addTodo = (data) => {
  const filePath = path.join(__dirname, "Data.json");
  const todos = getTodo();
  const newId = todos.length + 1;
  const newTodo = { id: newId, ...data };
  const todoToAdd = [...todos, newTodo];
  fs.writeFileSync(filePath, JSON.stringify(todoToAdd));
};

app.post("/", (req, res) => {
  const data = req.body;
  addTodo(data);
  res.send("Done");
});