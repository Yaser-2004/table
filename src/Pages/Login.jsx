import { useState, useReducer } from "react";
import { useNavigate } from "react-router-dom";
import { reducer, initialState } from "../reducer.js";

const Auth = ({ setIsAuthenticated }) => {
  const [state, dispatch] = useReducer(reducer, initialState); // State management using reducer
  const [isSignUp, setIsSignUp] = useState(true); // Toggle between Sign Up and Login
  const [error, setError] = useState(""); // Error message state
  const navigate = useNavigate();

  // Function to handle form submission
  // It prevents the default form submission, validates the input fields, and sets the user data in local storage
  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (!state.email || !state.password) { // Required field validation
        setError("All fields are required");
        return;
    }
    if (state.password.length < 6) {  // Password validation
    setError("Password must be at least 6 characters long");
    return;
    }

    localStorage.setItem("user", JSON.stringify({ name: state.name, mail: state.email }));
    setIsAuthenticated(true);
    navigate("/details");
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-900">
      <div className="bg-gray-800 p-4 rounded-lg shadow-lg w-96 text-white mx-2">
        <h2 className="text-2xl font-bold text-center mb-6">
          {isSignUp ? "Sign Up" : "Login"}
        </h2>
        {error && <p className="text-red-500 text-sm text-center mb-4">{error}</p>}
        <form onSubmit={handleSubmit} className="space-y-4">
        <input
            type="name"
            placeholder="First Name"
            className="w-full p-3 rounded bg-gray-700 text-white"
            value={state.name}
            onChange={(e) => dispatch({ type: "SET_NAME", payload: e.target.value })}
            required
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 rounded bg-gray-700 text-white"
            value={state.email}
            onChange={(e) => dispatch({ type: "SET_EMAIL", payload: e.target.value })}
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 rounded bg-gray-700 text-white"
            value={state.password}
            onChange={(e) => dispatch({ type: "SET_PASSWORD", payload: e.target.value })}
            required
          />
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 rounded transition"
          >
            {isSignUp ? "Sign Up" : "Login"}
          </button>
        </form>
        <p className="text-sm text-center mt-4">
          {isSignUp ? "Already have an account?" : "Don't have an account?"} 
          <button
            className="text-blue-400 ml-1 hover:underline"
            onClick={() => setIsSignUp(!isSignUp)}
          >
            {isSignUp ? "Login" : "Sign Up"}
          </button>
        </p>
      </div>
    </div>
  );
};

export default Auth;
