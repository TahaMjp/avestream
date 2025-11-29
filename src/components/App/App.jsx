import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Wrapper from "../Wrapper/Wrapper";
import Home from "../Home/Home";

const App = () => {
  return (
    <Router>
      <Wrapper>
        <Routes>
          <Route path="/" element={<Home currentSlide="1" />} />
          <Route path="/about" element={<Home currentSlide="2" />} />
          <Route path="/look" element={<Home currentSlide="3" />} />
          <Route path="/story" element={<Home currentSlide="4" />} />
          <Route path="/contact" element={<Home currentSlide="5" />} />
        </Routes>
      </Wrapper>
    </Router>
  );
};

export default App;
