import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './Components/Auth/login';
import Footer from "./footer";
import UserList from "./Components/User/user";
import './App.css';

function App() {
  const userToken = localStorage.getItem("authToken");

  return (
    <BrowserRouter>

      <Routes>
        {userToken ? (
            <Route path="/userList" element={<UserList />} />
        ) : (
          <Route path="/" element={<Login />} />
        )}
      </Routes>

      {/* <Footer /> */}
    </BrowserRouter>
  );
}

export default App;
