import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Info from "./pages/Information";
import QnA from "./pages/QnA";

function App() {
  return (
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/info" element={<Info />} />
        <Route path="/qna" element={<QnA />} />
      </Routes>
    
  );
}

export default App;
