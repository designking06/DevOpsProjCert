import React from 'react';

function ToDoListForm({inputValue, inputChangeHandler, onAddTask}) {
    return (
        <div data-testid="toDoListForm" id="toDoListForm">
        <input
        className="task-form-input"
        type="text"
        value={inputValue}
        onChange={inputChangeHandler}
        placeholder="Enter a new task"/>
        <button onClick={onAddTask} className="task-form-button">Add Task</button>
        </div>
    );
}

export default ToDoListForm;