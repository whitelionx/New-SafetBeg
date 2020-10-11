import React from "react";
import Router from "./routes/Router";
import { BrowserRouter } from "react-router-dom";
import Navigation from "./components/navigation/Navigation";
import Footer from "./components/footer/Footer";
import StickyPanels from "./components/sticky-panels/StickyPanels";

function App() {
  return (
    <>
      <StickyPanels />
      <BrowserRouter>
        <Navigation />
        <Router />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
