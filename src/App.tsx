import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Category from "./pages/category/Category";
import AddListing from "./pages/Listing/AddListing";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category/:id" element={<Category />} />
        <Route path="/addlisting" element={<AddListing />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
