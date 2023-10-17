import logo from "./logo.svg";
import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ListofUsers from "./pages/ListofUsers";

function App() {
  return (
    <div className="">
      <Navbar />
      <Routes>
        <Route path="/Home" Component={Home} />
        <Route path="/login" Component={Login} />
        <Route path="/Register" Component={Register} />
      </Routes>
    </div>
  );
}

export default App;