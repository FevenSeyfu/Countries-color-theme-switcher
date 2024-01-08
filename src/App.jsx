import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CountryProvider } from "./context/CountryContext";
import Home from "./pages/Home";
import DetailsPage from "./pages/DetailsPage";
import NoPage from "./pages/NoPage";

const App = () => {
  return (
    <BrowserRouter>
      <CountryProvider>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/:id" element={<DetailsPage />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </CountryProvider>
    </BrowserRouter>
  );
};

export default App;
