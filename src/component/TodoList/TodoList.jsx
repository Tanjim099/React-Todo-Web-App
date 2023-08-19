import React from 'react';
import TodoItem from './TodoItem';

function TodoList({ todos, onToggleStatus, onRemoveTodo }) {
    return (
        <div className="todo-list">
            {todos.map((todo, index) => (
                <TodoItem
                    key={index}
                    index={index}
                    todo={todo}
                    onToggleStatus={onToggleStatus}
                    onRemoveTodo={onRemoveTodo}
                />
            ))}
        </div>
    );
}

export default TodoList;
