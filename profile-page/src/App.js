import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Profile from "./component/Profile";
import Home from "./component/Home";
import Contact from "./component/Contact";
import Add from "./component/Add";
import Book from "./component/Book";
import EditBook from "./component/EditBook";
import User from "./component/User";
import Login from "./component/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home active="home" />} />
        <Route path="/home" element={<Home active="home" />} />
        <Route path="/add" element={<Add active="add" />} />
        <Route path="/books/:id" element={<Book />} />
        <Route path="/edit/:id" element={<EditBook />} />
        <Route path="/users/:id" element={<User />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
