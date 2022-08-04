// src/modules/counter.js

// const PLUS_ONE = "PLUS_ONE";
// const MINUS_ONE = "MINUS_ONE";
// Action Value
const ADD_NUMBER = "ADD_NUMBER";
const MINUS_NUMBER = "MINUS_NUMBER";
// Action Creator

export const addNumber = (payload) => {
    return {
        type: ADD_NUMBER,
        payload: payload,
    };
};

export const minusNumber = (payload) => {
    return {
        type: MINUS_NUMBER,
        payload,
    }
}

// export const plusOne = () => {
//   return {
//     type: PLUS_ONE,
//   };
// };

// export const minusOne = () => {
//   return {
//     type: MINUS_ONE,
//   };
// };

// 초기 상태값
const initialState = {
  number: 0,
};

// 리듀서
const counter = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NUMBER:
      return {
        number: state.number + action.payload,
      };
    case MINUS_NUMBER:
      return {
        number: state.number - action.payload,
      };

    default:
      return state;
  }
};

// 모듈파일에서는 리듀서를 export default 한다.
export default counter;
