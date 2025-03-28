import './App.css'
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Auth from './Pages/Login.jsx'
import Details from './Pages/Details.jsx';
import NotFound from './Pages/NotFound.jsx';
import { useEffect, useState } from 'react';


function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(localStorage.getItem("user") !== null); // Check if user is authenticated on initial load
  // useState hook to manage authentication state

  // useEffect hook to listen for changes in local storage
  // and update the authentication state accordingly
  useEffect(() => {
    const handleStorageChange = () => {
      setIsAuthenticated(localStorage.getItem("user") !== null);
    };

    handleStorageChange();
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Auth setIsAuthenticated={setIsAuthenticated} />} />
        <Route path='/details' element={isAuthenticated ? <Details /> : <Navigate to="/" />} />
        <Route path='*' element={<NotFound />} />
        
      </Routes>
    </Router>
  )
}

export default App
