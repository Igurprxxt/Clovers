import logo from "./logo.svg";
import "./App.css";
import Navbar from "../src/Navbar/Navbar";
import LandingPage from "./LandingPage/LandingPage";
import { Route, Routes } from "react-router-dom";
import Deals from "./Deals/Deals";
import Vegetables from "./Food/Vegetables";
import Beverages from "./Beverages/Beverages";
import Household from "./Household/Household";
import PersonalCare from "./PersonalCare/PersonalCare";
import MostPopular from "./MostPopular/MostPopular";
import Fruits from "./Food/Fruits";
import Meat from "./Food/Meat";
import Footer from "./Footer/Footer";
import Copyright from "./components/Copyright";
import Dairy from "./Food/Dairy";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/deals" element={<Deals />} />
        <Route path="/vegetables" element={<Vegetables />} />
        <Route path="/fruits" element={<Fruits />} />
        <Route path="/meat" element={<Meat />} />
        <Route path="/dairy" element={<Dairy/>} />
        <Route path="/beverages" element={<Beverages />} />
        <Route path="/household" element={<Household />} />
        <Route path="/personalCare" element={<PersonalCare />} />
        <Route path="/mostPopular" element={<MostPopular />} />
      </Routes>
      <Footer />
      <Copyright/>
    </div>
  );
}

export default App;
