import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Wrapper from "../Wrapper/Wrapper";
import Home from "../Home/Home";

const App = () => {
  return (
    <Router>
      <Wrapper>
        <Routes>
          {/* main landing page (first slide) */}
          <Route path="avestream/" element={<Home currentSlide="1" />} />
          {/* other slides with their own URLs */}
          <Route path="avestream/about" element={<Home currentSlide="2" />} />
          <Route path="avestream/look" element={<Home currentSlide="3" />} />
          <Route path="avestream/story" element={<Home currentSlide="4" />} />
          <Route path="avestream/contact" element={<Home currentSlide="5" />} />
        </Routes>
      </Wrapper>
    </Router>
  );
};

export default App;
