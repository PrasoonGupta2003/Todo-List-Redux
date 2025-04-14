import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";
import "./AddForm.css"; // 🆕 import CSS

export default function AddForm() {
  const [task, setTask] = useState("");
  const dispatch = useDispatch();

  const submitHandler = (evt) => {
    evt.preventDefault();
    if (task.trim() === "") return;
    dispatch(addTodo(task));
    setTask("");
  };

  return (
    <>
      <h1 className="welcome-heading">Welcome to Your Productive Day! 🌟</h1>
      <form onSubmit={submitHandler} className="todo-form">
        <input
          type="text"
          value={task}
          placeholder="Enter your next task..."
          onChange={(e) => setTask(e.target.value)}
        />
        <button type="submit">Add Task</button>
      </form>
    </>
  );
}
