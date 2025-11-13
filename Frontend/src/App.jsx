import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./Pages/Dashboard";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Preview from "./Pages/Preview";
import Layout from "./Pages/Layout";
import ResumeBuilder from "./Pages/ResumeBuilder";
import Signup from "./Pages/Signup";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="layout" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="resume/:resumeid" element={<ResumeBuilder />} />
        </Route>
        <Route path="view/:resumeid" element={<Preview />} />
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>

      </Routes>
      
    </div>
  );
};

export default App;
