import React, { useReducer } from "react";

export const Context = React.createContext();

const initialState = {
  count: 0,
  intValue: null,
};
function reducer(state, action) {
  switch (action.type) {
    case "change":
      return {
        ...state,
        intValue: action.payload.value,
      };
    case "increment":
      return {
        ...state,
        count: state.count + parseInt(state.intValue),
      };
    case "decrement":
      return {
        ...state,
        count: state.count - parseInt(state.intValue),
      };
    case "reset":
      return {
        ...state,
        count: 0,
      };
    default:
      return state;
  }
}

const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <Context.Provider value={[state, dispatch]}>{children}</Context.Provider>
  );
};
export default Provider;
