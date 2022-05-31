import { createContext, useReducer } from "react";
const initialState = {
  javascript: "",
  python: "",
  xml: localStorage.getItem(""),
};
export const store = createContext(initialState);
const { Provider } = store;

export function StateProvider({ children }) {
  const [state, dispatch] = useReducer((state, action) => {
    const currentState = { ...state };
    switch (action.type) {
      case "SET_PYTHON":
        currentState.python = action.payload;
        return currentState;
      case "SET_XML":
        currentState.xml = action.payload;
        return currentState;
      case "SET_JAVASCRIPT":
        currentState.javascript = action.payload;
        return currentState;
      default:
        throw new Error();
    }
  }, initialState);
  return <Provider value={{ state, dispatch }}>{children}</Provider>;
}
