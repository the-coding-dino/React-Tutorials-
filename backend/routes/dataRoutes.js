const express = require("express");
const router = express.Router();
const { getAllTodo, postTodo } = require("../controllers/dataController");

router.get("/datas", getAllTodo);

router.post("/", postTodo);


module.exports = router