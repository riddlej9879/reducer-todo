import React, { useReducer } from "react";
import TodoForm from "./Components/TodoForm";
import TodoList from "./Components/TodoList";
import { itemReducer, initialState } from "./Reducers/useReducer";
import './App.css';

function App() {
  const [state, dispatch] = useReducer(itemReducer, initialState);
  console.log('initialState', state);

  const addTask = newTask => {
    dispatch({
      type: 'ADD_TODO',
      payload: newTask
    });
  }

  const toggleTask = id => {
    dispatch({
      type: 'TOGGLE_COMPLETED',
      payload: id
    });
  }

  const filterTasks = () => {
    dispatch({
      type: 'FILTER_TODO'
    })
  }
  return (
    <div className="App">
      <header>
        <h1>My list of things to do!</h1>
      </header>
      <TodoForm
        addTask={addTask}
        filterTasks={filterTasks}
      />
      <TodoList
        tasks={state.tasks}
        toggleTask={toggleTask} />
    </div>
  )

}
export default App;
