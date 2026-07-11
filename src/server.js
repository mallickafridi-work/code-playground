import express from "express"
import fs from "fs"
import cors from "cors"

const app = express();
const PORT = 4000;

app.use(cors());
app.use(express.json());

const TODOS_FILE = "./todos.json";

// Helper to read todos
function readTodos() {
    return JSON.parse(fs.readFileSync(TODOS_FILE, "utf8"));
}

// Helper to write todos
function writeTodos(todos) {
    fs.writeFileSync(TODOS_FILE, JSON.stringify(todos, null, 2));
}

// CRUD routes
app.get("/todos", (req, res) => {
    res.json(readTodos());
});

app.post("/todos", (req, res) => {
    const todos = readTodos();
    const newTodo = { id: Date.now(), text: req.body.text };
    todos.push(newTodo);
    writeTodos(todos);
    res.json(newTodo);
});

app.put("/todos/:id", (req, res) => {
    let todos = readTodos();
    todos = todos.map(t =>
        t.id === parseInt(req.params.id) ? { ...t, text: req.body.text } : t
    );
    writeTodos(todos);
    res.json({ message: "Todo updated" });
});

app.delete("/todos/:id", (req, res) => {
    let todos = readTodos();
    todos = todos.filter(t => t.id !== parseInt(req.params.id));
    writeTodos(todos);
    res.json({ message: "Todo deleted" });
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
