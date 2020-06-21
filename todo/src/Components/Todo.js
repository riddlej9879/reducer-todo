import React from 'react';

const Todo = props => {
    return (
        <div key={props.id} >
            <h3 id="todoItem" onClick={() => props.toggleTask(props.id)} style={{
                textDecoration: props.id.completed ? "line-through" : "",
            }}>
                {props.name}
            </h3>
        </div>
    )
}

export default Todo;
