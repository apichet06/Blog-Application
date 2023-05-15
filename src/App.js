import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Home } from "./components/Home";
import { Blogs } from "./components/Blogs";
import { About } from "./components/About";
import { Notfound } from "./components/Notfound";
import "./components/css/Menu.css";
import Menu from './components/Menu';

import { BrowserRouter, Routes, Route } from "react-router-dom";


export default function App() {
  return (
    <>
      <BrowserRouter>
        <Menu />
        <Routes>
          <Route path="/" element={<Home />}> </Route>
          <Route path="/About" element={<About />}> </Route>
          <Route path="/Blogs" element={<Blogs />}> </Route>
          <Route path="*" element={<Notfound />}> </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}