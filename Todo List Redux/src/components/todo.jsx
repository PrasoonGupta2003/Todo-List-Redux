import "./Todo.css"
import { useSelector, useDispatch } from "react-redux";
import AddForm from "./AddForm";
import { deleteTodo, markAsDone } from "../features/todo/todoSlice";

export default function Todo() {
  const todos = useSelector((state) => state.todos.todos); // ✅ fix selector
  const dispatch = useDispatch();

  const clickHandlerDelete = (id) => {
    dispatch(deleteTodo(id));
  };

  const clickHandlerMarkAsDone = (id) => {
    dispatch(markAsDone(id));
  };

  return (
    <>
      <AddForm />
      <h2>Todo List App</h2>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id} style={{ textDecoration: todo.isDone ? "line-through" : "none" }}>
          <span>{todo.task}</span>
          <button onClick={() => clickHandlerDelete(todo.id)}>Delete</button>
          {!todo.isDone && (
            <button onClick={() => clickHandlerMarkAsDone(todo.id)}>Mark As Done</button>
          )}
        </li>        
        ))}
      </ul>
    </>
  );
}
