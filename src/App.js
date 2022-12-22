import logo from './logo.svg';
import './App.css';
import Navbar from '../src/Navbar/Navbar';
import LandingPage from './LandingPage/LandingPage';
import { Route, Routes } from "react-router-dom";
import Deals from './Deals/Deals';
import Food from './Food/Food';
import Beverages from './Beverages/Beverages';
import Household from './Household/Household';
import PersonalCare from './PersonalCare/PersonalCare';
import MostPopular from './MostPopular/MostPopular';

function App() {
  return (
    <div className="App">
     <Navbar/>
     <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/deals" element={<Deals/>}/>
        <Route path="/food" element={<Food/>}/>
        <Route path="/beverages" element={<Beverages/>}/>
        <Route path="/household" element={<Household/>}/>
        <Route path="/personalCare" element={<PersonalCare/>}/>
        <Route path="/mostPopular" element={<MostPopular/>}/>
       
      </Routes>
    </div>
  );
}

export default App;
