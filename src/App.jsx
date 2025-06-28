import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CreateAccount from "./pages/CreateAccount";
import Login from "./pages/Login";
import Profile from "./pages/Profile";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/create-account" element={<CreateAccount />} />
      <Route path="/login" element={<Login />} />
      <Route path="/profile" element={<Profile />} />
      {/* Add more routes as needed */}
    </Routes>
  );
};

export default App;
