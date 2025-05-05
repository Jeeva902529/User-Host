import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Dessert from "./Dessert";
import Biriyani from "./Biriyani";
import Nav from './Nav';
import Footer from "./Footer";
import Login from "./Login"
import Cart from "./Maincart";
import Dosa from "./Dosa"
import Noodles from "./Noodles "
import Momos from "./Momos"
import Support from "./Support"
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
import { PieChartIcon } from "lucide-react";
import PieMenu from "./Pie";
import BrownieMenu from "./Brownies";
import DoughnutMenu from "./Doughnuts";
import FriedDessertsMenu from "./FriedDesserts";
import PuddingMenu from "./Pudding";
import PastriesMenu from "./Pastry"
import GulabJamunMenu from "./GulabJamun.jsx";
import JalebiMenu from "./Jalebi.jsx";
import HalwaMenu from "./Halwa.jsx";
function App() {
  return (
    <Routes>
      <Route path="/Home" element={<><Nav/><Home /><Footer/></>} />
      <Route path="/desserts/more" element={<><Nav/><Dessert /><Footer/></>} />
      <Route path="/" element={<Login />} />
      <Route path="/Home/biryani" element={<><Nav/><Biriyani/></>} /> 
      <Route path="/Home/Dosa" element={<><Nav/><Dosa/></>} /> 
      <Route path="/Home/Noodles" element={<><Nav/><Noodles/></>} /> 
      <Route path="/Home/Momos" element={<><Nav/><Momos/></>} />
      <Route path="/Home/cart" element={<><Cart/></>} /> 
      <Route path="/Home/support" element={<><Nav/><Support/></>} /> 
      <Route path="/Home/Friedrice" element={<><Nav/><FriedRiceMenu/></>} /> 
      <Route path="/Home/Dosa" element={<><Nav/><DosaMenu/></>} /> 
      <Route path="/Home/Pasta" element={<><Nav/><PastaMenu/></>} /> 
      <Route path="/Home/Burger" element={<><Nav/><BurgerMenu/></>} /> 
      <Route path="/Home/Idli" element={<><Nav/><IdliMenu/></>} /> 
      <Route path="/Home/Naan" element={<><Nav/><NaanMenu/></>} /> 
      <Route path="/Home/Roll" element={<><Nav/><RollMenu/></>} /> 
      <Route path="/Home/Pizza" element={<><Nav/><PizzaMenu/></>} /> 
      <Route path="/Home/Sandwitch" element={<><Nav/><SandwichMenu/></>} /> 
      <Route path="/desserts/cake" element={<><Nav/><CakeMenu/></>} /> 
      <Route path="/desserts/Icecream" element={<><Nav/><IceCreamMenu/></>} /> 
      <Route path="/desserts/Cookies" element={<><Nav/><CookiesMenu/></>} /> 
      <Route path="/desserts/Pie" element={<><Nav/><PieMenu/></>} /> 
      <Route path="/desserts/Brownie" element={<><Nav/><BrownieMenu/></>} /> 
      <Route path="/desserts/Doughnuts" element={<><Nav/><DoughnutMenu/></>} /> 
      <Route path="/desserts/FriedDesserts" element={<><Nav/><FriedDessertsMenu/></>} />
      <Route path="/desserts/Pudding" element={<><Nav/><PuddingMenu/></>} />
      <Route path="/desserts/Pastries" element={<><Nav/><PastriesMenu/></>} />
      <Route path="/desserts/GulabJamun" element={<><Nav/><GulabJamunMenu/></>} />
      <Route path="/desserts/Jalebi" element={<><Nav/><JalebiMenu/></>} />
      <Route path="/desserts/Halwa" element={<><Nav/><HalwaMenu/></>} />

      

      




    </Routes>
  );
}

export default App;
