import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage.js";
import CreateProductPage from "./pages/CreateProductPage.js";
import ViewProductPage from "./pages/ViewProductPage.js";
import EditProductPage from "./pages/EditProductPage.js";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/product/create" element={<CreateProductPage />} />
          <Route
            path="/product/view/:productId"
            element={<ViewProductPage />}
          />
          <Route
            path="/product/edit/:productId"
            element={<EditProductPage />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
