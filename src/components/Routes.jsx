import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Dessert from "./Dessert";
import Biriyani from "./Biriyani";
import Nav from './Nav';
import Footer from "./Footer";
import Login from "./Login";
import Cart from "./Maincart";
import Dosa from "./Dosa";
import Noodles from "./Noodles"; // Fixed typo: removed trailing space
import Momos from "./Momos";
import Support from "./Support";
import FriedRiceMenu from "./FriedRice";
import DosaMenu from "./Dosa";
import PastaMenu from "./Pasta";
import BurgerMenu from "./Burger";
import IdliMenu from "./Idli";
import NaanMenu from "./Naan";
import RollMenu from "./Roll";
import PizzaMenu from "./Pizza";
import SandwichMenu from "./Sandwich";
import CakeMenu from "./Cake";
import IceCreamMenu from "./Icecream";
import CookiesMenu from "./Cookies";
import PieMenu from "./Pie";
import BrownieMenu from "./Brownies";
import DoughnutMenu from "./Doughnuts";
import FriedDessertsMenu from "./FriedDesserts";
import PuddingMenu from "./Pudding";
import PastriesMenu from "./Pastry";
import GulabJamunMenu from "./GulabJamun";
import JalebiMenu from "./Jalebi";
import HalwaMenu from "./Halwa";

// 404 Error Page
function Error404() {
  return (
    <div style={{ padding: "2rem", textAlign: "center" }}>
      <h1>404 - Page Not Found</h1>
      <p>The requested page does not exist.</p>
    </div>
  );
}

function App() {
  return (
    <Routes>
      {/* Root */}
      <Route path="/" element={<Login />} />

      {/* Home Routes */}
      <Route path="/Home" element={<><Nav /><Home /><Footer /></>} />
      <Route path="/Home/Biriyani" element={<><Nav /><Biriyani /></>} />
      <Route path="/Home/Dosa" element={<><Nav /><DosaMenu /></>} />
      <Route path="/Home/Noodles" element={<><Nav /><Noodles /></>} />
      <Route path="/Home/Momos" element={<><Nav /><Momos /></>} />
      <Route path="/Home/Cart" element={<><Cart /></>} />
      <Route path="/Home/Support" element={<><Nav /><Support /></>} />
      <Route path="/Home/Friedrice" element={<><Nav /><FriedRiceMenu /></>} />
      <Route path="/Home/Pasta" element={<><Nav /><PastaMenu /></>} />
      <Route path="/Home/Burger" element={<><Nav /><BurgerMenu /></>} />
      <Route path="/Home/Idli" element={<><Nav /><IdliMenu /></>} />
      <Route path="/Home/Naan" element={<><Nav /><NaanMenu /></>} />
      <Route path="/Home/Roll" element={<><Nav /><RollMenu /></>} />
      <Route path="/Home/Pizza" element={<><Nav /><PizzaMenu /></>} />
      <Route path="/Home/Sandwich" element={<><Nav /><SandwichMenu /></>} /> {/* Fixed typo */}

      {/* Dessert Routes */}
      <Route path="/Desserts" element={<><Nav /><Dessert /><Footer /></>} />
      <Route path="/Desserts/Cake" element={<><Nav /><CakeMenu /></>} />
      <Route path="/Desserts/Icecream" element={<><Nav /><IceCreamMenu /></>} />
      <Route path="/Desserts/Cookies" element={<><Nav /><CookiesMenu /></>} />
      <Route path="/Desserts/Pie" element={<><Nav /><PieMenu /></>} />
      <Route path="/Desserts/Brownie" element={<><Nav /><BrownieMenu /></>} />
      <Route path="/Desserts/Doughnuts" element={<><Nav /><DoughnutMenu /></>} />
      <Route path="/Desserts/FriedDesserts" element={<><Nav /><FriedDessertsMenu /></>} />
      <Route path="/Desserts/Pudding" element={<><Nav /><PuddingMenu /></>} />
      <Route path="/Desserts/Pastries" element={<><Nav /><PastriesMenu /></>} />
      <Route path="/Desserts/GulabJamun" element={<><Nav /><GulabJamunMenu /></>} />
      <Route path="/Desserts/Jalebi" element={<><Nav /><JalebiMenu /></>} />
      <Route path="/Desserts/Halwa" element={<><Nav /><HalwaMenu /></>} />

      {/* 404 Fallback */}
      <Route path="*" element={<Error404 />} />
    </Routes>
  );
}

export default App;
