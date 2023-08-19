import React from 'react';

function TodoItem({ index, todo, onToggleStatus, onRemoveTodo }) {
    return (
        <div className={`todo-item ${todo.completed ? 'completed' : ''}`}>
            <span className="todo-number">{index + 1}</span>
            <div className="todo-title">{todo.title}</div>
            <div className="todo-buttons">
                <button onClick={() => onToggleStatus(index)}>
                    {todo.completed ? 'Pending' : 'Completed'}
                </button>
                <button onClick={() => onRemoveTodo(index)}>Remove</button>
            </div>
        </div>
    );
}

export default TodoItem;
