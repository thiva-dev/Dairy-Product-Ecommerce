import { Routes,Route } from "react-router-dom";
import Brand from "./Brand";
import Offer from "./Offer";
import Popular from "./Popular";
import Footer from "./Footer";
import Category from "./Category";
import Categories from "./Pages/Categories";
import Admin from "./Pages/Admin";
import Home from "./Home";
import Addtocart from "./Pages/Addtocart";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <Home/>
            <Category/>
            <Popular/>
            <Offer/>
            <Brand/>
            <Footer/>
          </>
        }
      />
    <Route path="/Categories" element={<Categories/>} />
    <Route path="/admin" element={<Admin/>}/>
    <Route path="/Addtocart" element={<Addtocart/>}/>
    </Routes>

    
  );
}
export default App
