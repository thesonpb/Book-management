import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Add from "./component/Add";
import Allusers from "./component/Allusers";
import Book from "./component/Book";
import EditBook from "./component/EditBook";
import Home from "./component/Home";
import Login from "./component/Login";
import User from "./component/User";

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
                <Route path="/listusers" element={<Allusers />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
