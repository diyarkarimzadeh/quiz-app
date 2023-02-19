import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Question1 from "./pages/Question1";
import Question2 from "./pages/Question2";
import Question3 from "./pages/Question3";
import Question4 from "./pages/Question4";
import Question5 from "./pages/Question5";
import Scores from "./pages/Scores";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/question/1" element={<Question1 />} />
        <Route path="/question/2" element={<Question2 />} />
        <Route path="/question/3" element={<Question3 />} />
        <Route path="/question/4" element={<Question4 />} />
        <Route path="/question/5" element={<Question5 />} />
        <Route path="/scores" element={<Scores />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
