// reducer.js
export const initialState = {
    name: "",
    email: "",
    password: "",
  };
  
  // This reducer function manages the state of the authentication form
  // It takes the current state and an action as arguments and returns the new state
  export const reducer = (state, action) => {
    switch (action.type) {
      case "SET_NAME":
        return { ...state, name: action.payload };
      case "SET_EMAIL":
        return { ...state, email: action.payload };
      case "SET_PASSWORD":
        return { ...state, password: action.payload };
      case "RESET":
        return initialState;
      default:
        return state;
    }
  };
  