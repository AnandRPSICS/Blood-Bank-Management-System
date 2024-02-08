import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/login/login";
import Signin from "./pages/signin/signup";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={"<h1> Home Page</h1>"} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
