import React, { useState } from 'react';

const TodoForm = ({ addTask, filterTasks }) => {
    const [newTask, setNewTask] = useState('');

    // Sets newTask variable to user input
    const handleChanges = event => {
        setNewTask(event.target.value)
    }

    const handleSubmit = event => {
        event.preventDefault();
        // if statement prevents adding empty tasks
        if (newTask) {
            addTask(newTask);
        }
        setNewTask('');
    }

    // Clears completed tasks
    const handleClear = event => {
        event.preventDefault();
        filterTasks();
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="newTask"
                    placeholder="ADD TASK"
                    value={newTask}
                    onChange={handleChanges}
                />
                <button type="Submit">Add</button>
                <button type="button" onClick={handleClear}>Clear</button>
            </form>
        </div>
    )
}

export default TodoForm;
