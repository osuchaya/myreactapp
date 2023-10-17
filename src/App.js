import logo from "./logo.svg";
import "./App.css";
import { useApi } from "./api";
import { useEffect, useState } from "react";
import { RegisteredPage } from "./pages/RegisterPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const api = useApi();
  const [users, setUsers] = useState();
  const [counter, setCounting] = useState(0);

  useEffect(() => {
    async function getUsers() {
      const response = await api.get("users");
      console.log(response);
      setUsers(response?.result)
    }
    getUsers();
  }, [api]);
  /*div in return here is not necessary but for styling */
  return (

    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<RegisteredPage/>}/>
          
        </Routes>
      </Router>
    </div>
  );
}

export default App;
