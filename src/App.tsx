import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import FitfuelCaseStudy from "./components/Projects/FitfuelCaseStudy/index";
import { LoadingProvider } from "./context/LoadingProvider";

const App = () => {
  return (
    <LoadingProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project/fitfuel" element={<FitfuelCaseStudy />} />
      </Routes>
    </LoadingProvider>
  );
};

export default App;
