function TodoItem({ todo, index, toggleComplete, deleteTask }) {
  return (
    <div className="todo-item">
      <span
        onClick={() => toggleComplete(index)}
        style={{ textDecoration: todo.completed ? "line-through" : "none" }}
      >
        {todo.text}
      </span>
      <button className="delete-btn" onClick={() => deleteTask(index)}>
        Delete
      </button>
    </div>
  );
}

export default TodoItem;
