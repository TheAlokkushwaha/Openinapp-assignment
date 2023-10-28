import { useEffect, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import SignIn from "./pages/SignIn";
import Dashboard from "./pages/Dashboard";


function App() {

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  useEffect(() => {

    const token = localStorage.getItem("token");
    const userIsAuthenticated = token === "true"; // Convert to a boolean
    setIsAuthenticated(userIsAuthenticated);
  }, []);

  return (
    <Routes>
      <Route path="/" element={<SignIn setIsAuthenticated={setIsAuthenticated} />} />
      <Route
        path="/dashboard"
        element={
          isAuthenticated ? (
            <Dashboard />
          ) : (
            <Navigate to="/" replace={true} />
          )
        }
      />
    </Routes>
  );
}

export default App;
