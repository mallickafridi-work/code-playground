import { useState } from 'react';
import { useGetTodosQuery, useAddTodoMutation, useUpdateTodoMutation, useDeleteTodoMutation } from '@/store/TodoSlice'

const Todo = () => {

  const { data: todos = [], isLoading } = useGetTodosQuery();
  const [addTodo] = useAddTodoMutation();
  const [updateTodo] = useUpdateTodoMutation();
  const [deleteTodo] = useDeleteTodoMutation();
  const [text, setText] = useState('');
  const [editMode, setEditMode] = useState(false)

  type Todo = { id: number; text: string };

  const [editTodo, setEditTodo] = useState<Todo | null>(null)

  if (isLoading) return <p>Loading...</p>

  function handleClick(todo: { id: number, text: string }) {
    setEditMode(true)
    setEditTodo(todo)
    setText(todo.text)
  }

  function handleSubmit(e: React.SyntheticEvent) {
    e.preventDefault()
    if (!editMode) {
      addTodo(text)
      setText('')
    } else {
      updateTodo({ id: editTodo!.id, text: text });
      setEditMode(false);
      setText('');
      setEditTodo(null)
    }
  }

  return (
    <div>
      <h1>Todo App</h1>
      <form onSubmit={handleSubmit}>
        <input className="mx-2 bg-foreground text-black" value={text} onChange={(e) => setText(e.target.value)} />
        {editMode
          ? <button type='submit'>Update</button>
          : <button type='submit'>Add</button>}
      </form>
      <ul>
        {todos.map((t: Todo) => (
          <li key={t.id} className="border-2 border-white">
            <p onClick={() => handleClick(t)}>{t.text}</p>
            <button onClick={() => deleteTodo(t.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div >
  )
}

export default Todo