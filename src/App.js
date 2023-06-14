import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
// import Detail from './components/Detail';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
