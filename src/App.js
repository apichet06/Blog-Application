import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Home } from "./components/Home";
import { Blogs } from "./components/Blogs";
import { About } from "./components/About";
import { Notfound } from "./components/Notfound";
import { Details } from "./components/Details";
import "./components/css/Menu.css";
import Menu from './components/Menu';
import "./App.css"
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";


export default function App() {
  return (
    <>
      <BrowserRouter>
        <Menu />
        <Routes>
          <Route path="/" element={<Home />}> </Route>
          <Route path="/about" element={<About />}> </Route>
          <Route path="/blogs" element={<Blogs />}> </Route>
          <Route path="*" element={<Notfound />}> </Route>
          <Route path="/home" element={<Navigate to="/" />}> </Route>
          <Route path="/blogs/:id" element={<Details />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}