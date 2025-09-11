import "./App.css";
import { Routes, Route } from "react-router-dom";

// Components
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

// Pages
import Count from "./Pages/Count/Count";
import Registration from "./Pages/Registration/Registration";
import User from "./Pages/User-Api/User"; // API calling page
import Login from "./Pages/Login/Login";

export default function App() {
  return (
    <>
      <Header />

      <Routes>

        <Route path="/" element={<Login />} />
        <Route path="/count" element={<Count />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/user" element={<User />} />
      </Routes>

      <Footer />
    </>
  );
}
