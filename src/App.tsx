import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import CreateItem from "./pages/CreateItem/CreateItem";
import EditItem from "./pages/EditItem/EditItem";
import Header from "./components/Header/Header";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<CreateItem />} />
        <Route path="/edit/:id" element={<EditItem />} />
      </Routes>
    </Router>
  );
};

export default App;
