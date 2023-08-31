import { Route, Routes } from "react-router-dom";
import Gallery from "./components/Gallery/Gallery";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Gallery />} />
      <Route path="*" element={<h1>Not found</h1>} />
    </Routes>
  );
}

export default App;
