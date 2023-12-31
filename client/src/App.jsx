import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Header from "./components/Header";
import PrivateRoute from "./components/PrivateRoute";
import AdminDash from "./pages/AdminDash";
import PrivateAdminRoute from "./components/PrivateAdminRoute";
import PrivateRoute2 from "./components/PrivateRoute2";
import PrivateRoute3 from "./components/PrivateRoute3";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-in" element={< PrivateRoute3/>} />
        <Route path="/sign-up" element={ <PrivateRoute2/>} />
        <Route element={<PrivateRoute />}>
          <Route path="/profile" element={<Profile />} />
          <Route element={<PrivateAdminRoute />}>
            <Route path="/admin-dash" element={<AdminDash />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
