import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import { AuthProvider } from "./components/context/AuthProvider";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  Navigation,
 
  Home,
  Rent,
  Contact,
  Rules,
  Help,
  About,
  Profile,
  
} from "./components";

ReactDOM.render(
  <Router>
    <Navigation />
    <AuthProvider>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/help" element={<Help />} />
      <Route path="/rules" element={<Rules />} />
      <Route path="/rent" element={<Rent />} />
      <Route path="/about" element={<About />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
    </AuthProvider>
  </Router>,

  document.getElementById("root")
);

serviceWorker.unregister();
