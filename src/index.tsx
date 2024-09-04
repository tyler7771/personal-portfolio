import "./index.css";

import About from "./components/About/About";
import { ChakraProvider } from "@chakra-ui/react";
import Education from "./components/Education/Education";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Projects from "./components/Projects/Projects";
import React from "react";
import ReactDOM from "react-dom/client";
import WorkExpericance from "./components/WorkExperiance/WorkExperiance";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ChakraProvider>
      <Header />
      <Home />
      <Projects />
      <About />
      <WorkExpericance />
      <Education />
      <Footer />
    </ChakraProvider>
  </React.StrictMode>
);
reportWebVitals();
