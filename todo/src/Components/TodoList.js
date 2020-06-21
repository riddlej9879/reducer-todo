import React from 'react';
import Todo from './Todo';

const TodoList = props => {

  return (
    <div>
      <h2>Complete these Tasks asap: </h2>
      {props.tasks.map(todo => {
        return (
          <Todo
            key={todo.id}
            id={todo.id}
            name={todo.item}
            state={todo.completed}
            toggleTask={props.toggleTask}
          />
        )
      })}
    </div>
  )
}

export default TodoList;
