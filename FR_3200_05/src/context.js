import {
  createContext,
  useState,
  useReducer,
  useMemo,
  useCallback,
  useContext,
} from "react";

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

export const Context = createContext();

const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [color, setColor] = useState("#FFFFFF");

  const handleOnChange = (e) =>
    dispatch({ type: "change", payload: { value: e.target.value } });
  const increment = useCallback(() => {
    !!state.intValue && dispatch({ type: "increment" });
  }, [state.intValue]);
  const decrement = useCallback(() => {
    !!state.intValue && dispatch({ type: "decrement" });
  }, [state.intValue]);
  const reset = () => dispatch({ type: "reset" });

  const value = useMemo(() => {
    return {
      color,
      state,
      changeColor: setColor,
      handleOnChange,
      increment,
      decrement,
      reset,
    };
  }, [increment, decrement, state, color]);
  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export const useCounterContext = () => {
  return useContext(Context);
};

export default Provider;
