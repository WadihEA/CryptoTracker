import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Main from "./components/Main";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Show from "./components/Show";

function App() {
  const user = localStorage.getItem("token");
  return (
    <Router>
      <Routes>
        <Route path="/" element={user ? <Login /> : <Main />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Main" element={<Main />} />
        <Route path="/:id" element={<Show />} />
      </Routes>
    </Router>
  );
}

export default App;
