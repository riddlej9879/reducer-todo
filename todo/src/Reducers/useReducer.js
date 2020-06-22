// Initialization
export const initialState = {
    tasks: [
        {
            id: 1,
            item: "First Task",
            completed: false,
        }
    ]
};

export const itemReducer = (state, action) => {
    switch (action.type) {
        case "ADD_TASK":
            const newTodo = {
                id: Date.now(),
                item: action.payload,
                completed: false,
            };
            return {
                ...state,
                tasks: [...state.tasks, newTodo],
            };
        case "TOGGLE_COMPLETED":
            console.log(action.payload)
            const updateTodo = state.tasks.map((todo) => {
                if (todo.id === action.payload) {
                    return { ...todo, completed: !todo.completed };
                } else {
                    return todo;
                }
            });
            return {
                ...state,
                tasks: updateTodo,
            }
        case "FILTER_TASK":
            const incompleteTasks = state.tasks.filter(todo => {
                if (todo.completed === false) {
                    return { ...todo }
                }
            })
            return {
                ...state,
                tasks: incompleteTasks
            }
        default:
            return state;
    }
};