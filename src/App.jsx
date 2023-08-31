import { Route, Routes } from "react-router-dom";
import Gallery from "./components/Gallery/Gallery";
import ImageDetails from "./components/ImageDetails/ImageDetails";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Gallery />} />
      <Route path="/photos/:id" element={<ImageDetails />} />
      <Route path="*" element={<h1>Not found</h1>} />
    </Routes>
  );
}

export default App;
