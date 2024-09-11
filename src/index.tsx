import "./index.css";

import About from "./components/About/About";
import { ChakraProvider } from "@chakra-ui/react";
import Education from "./components/Education/Education";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Music from "./components/Music/Music";
import Projects from "./components/Projects/Projects";
import React from "react";
import ReactDOM from "react-dom/client";
import Socials from "./components/Socials/Socials";
import WorkExperience from "./components/WorkExperience/WorkExperience";
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
      <WorkExperience />
      <Education />
      <Socials />
      <Music />
      <Footer />
    </ChakraProvider>
  </React.StrictMode>
);
reportWebVitals();
