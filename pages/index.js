import React from "react";
import stylesheet from "../styles/index.scss";
// import normalize from 'normalize.css';

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
console.log("styles:", stylesheet);

export default () => {
  return (
    <div>
      <style jsx>{stylesheet}</style>
      <Navbar />
      <h1>A simple heading</h1>
      <p>green "Hello world!"</p>
      <Footer />
    </div>
  );
};
