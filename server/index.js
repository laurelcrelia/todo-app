const port = process.env.PORT || 3000;
const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

require("dotenv").config()
app.use(cors());
app.use(express.json());

// get all todos
app.get("/api/todos", async (req, res) => {
  try {
    const allTodos = await pool.query("SELECT * FROM todo ORDER BY id");
    res.json(allTodos.rows);
  } catch (err) {
    console.error(err.message);
  }
});

// create a todo
app.post("/api/todos", async (req, res) => {
  try {
    const { description } = req.body;
    const newTodo = await pool.query("INSERT INTO todo (description) VALUES($1) RETURNING *",
    [description]
  );
    res.json(newTodo.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

// delete a todo
app.delete("/api/todos/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deleteTodo = await pool.query("DELETE FROM todo WHERE id = $1", 
    [id]
    );
    res.json(`Todo with an id of ${id} was deleted!`);
  } catch (err) {
    console.log(err.message);
  }
});

// update a todo
app.put("/api/todos/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { description } = req.body;
    const updateTodo = await pool.query("UPDATE todo SET description = $1 WHERE id = $2",
    [description, id]
    );

    res.json(`Todo with an id of ${id} was updated!`);
  } catch (err) {
    console.error(err.message);
  }
});

app.listen(port, () => {
  console.log(`Listening on port ${port}...`)
});
