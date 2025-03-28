// reducer.js
export const initialState = {
    name: "",
    email: "",
    password: "",
  };
  
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
  