const path = require("path");
const fs = require("fs");
const filePath = path.join(__dirname, "../Data.json");

const getTodo = () => {
  const data = fs.readFileSync(filePath, "utf-8");
  return JSON.parse(data);
};

const getAllTodo = (req, res) => {
  const datas = getTodo();
  res.send(datas);
};

const addTodo = (data) => {
  const todos = getTodo();
  const newId = todos.length + 1;
  const newTodo = { id: newId, ...data };
  const todoToAdd = [...todos, newTodo];
  fs.writeFileSync(filePath, JSON.stringify(todoToAdd));
};

const postTodo = (req, res) => {
  const data = req.body;
  addTodo(data);
  res.send("Done");
};

module.exports = { getAllTodo, postTodo };
