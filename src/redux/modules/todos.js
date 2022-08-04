
// const ADD_TITLE = "ADD_TITLE";
// const ADD_BODY = "ADD_BODY";
const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";
const TOGGLE_TODO = "TOGGLE_TODO";

export const addTodo = (payload) => {
  return {
    type: ADD_TODO,
    payload,
  }
}

export const deleteTodo = (payload) => {
  return {
    type: DELETE_TODO,
    payload,
  }
}

export const toggleTodo = (payload) => {
  return {
    type: TOGGLE_TODO,
    payload,
  }
}



// export const addTitle = (payload) => {
//     return {
//         type: ADD_TITLE,
//         payload,
//     }
// }

// export const addBody = (payload) => {
//     return {
//         type: ADD_BODY,
//         payload,
//     }
// }


const initialState = {
    todos: [
      {
        id:1,
        title: "리액트를 배우자",
        body: "히히히",
        isDone: false,
      },
      {
        id:2,
        title: "리액트를 배우자2",
        body: "히히히2",
        isDone: true,
      },
    ],
  };

  const todos = (state = initialState, action) => {
    switch (action.type) {
      case ADD_TODO:
        return {
          todos:[...state.todos, action.payload],
        }

      case DELETE_TODO:
        return {
          todos: state.todos.filter((todo) => todo.id !== action.payload)
        }

      case TOGGLE_TODO:
        action.payload.isDone === false? action.payload.isDone = true : action.payload.isDone = false
        console.log(action.payload, state.todos)
        // console.log(action.payload.isDone)
        return {
          todos:[...state.todos],
        }

      default:
        return state;
    }
  };

  export default todos