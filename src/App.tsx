import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import FitfuelCaseStudy from "./components/Projects/FitfuelCaseStudy/index";
import CarbonRemovalCaseStudy from "./components/Projects/CarbonRemovalCaseStudy/index";
import { LoadingProvider } from "./context/LoadingProvider";

const App = () => {
  return (
    <LoadingProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project/fitfuel" element={<FitfuelCaseStudy />} />
        <Route path="/project/carbon-removal" element={<CarbonRemovalCaseStudy />} />
      </Routes>
    </LoadingProvider>
  );
};

export default App;
