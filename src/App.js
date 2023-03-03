import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Read from "./components/Read/Read";
import NotFound from "./components/NotFound/NotFound";
import Create from "./components/Create/Create";
import { UserProvider } from "./components/UserContext/UserContext";
import Delete from "./components/Delete/Delete";
import Edit from "./components/Edit/Edit";

function App() {
  return (
    <UserProvider>
      <div className="app">
        <Router>
          <Routes>
            <Route path="/create" element={<Create />} />
            <Route path="/read/:id" element={<Read />} />
            <Route path="/edit/:id" element={<Edit />} />
            <Route path="/delete/:id" element={<Delete />} />
            <Route exact path="/" element={<Home />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      </div>
    </UserProvider >
  );
}

export default App;
