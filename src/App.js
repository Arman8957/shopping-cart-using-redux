import logo from "./logo.svg";
import "./App.css";
import Layout from "./components/Layout";
import Home from "./pages/home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Details from "./pages/details";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/:slug" element={<Details />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
