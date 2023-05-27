const port = process.env.PORT || 3000;
const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

require("dotenv").config()
app.use(cors());
app.use(express.json());

// get all todos
app.get("/todos", async (req, res) => {
  try {
    const allTodos = await pool.query("SELECT * FROM todo");
    res.json(allTodos.rows);
  } catch (err) {
    console.error(err.message);
  }
});

// create a todo
// ...

// get a todo
// ...

// update a todo
//...

// delete a todo
// ...

app.listen(port, () => {
  console.log(`Listening on port ${port}...`)
});
