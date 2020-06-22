import React from 'react';

const Todo = props => {
    console.log(props)

    return (
        <div
            className={`task${props.completed ? " completed" : ""}`}
            onClick={() => {
                props.toggleTask(props.id)
                console.log(props.completed)
            }}
        >
            <h3>
                {props.task}
            </h3>
        </div>
    )
}

export default Todo;
