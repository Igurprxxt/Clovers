import logo from "./logo.svg";
import "./App.css";
import Navbar from "../src/Navbar/Navbar";
import LandingPage from "./LandingPage/LandingPage";
import { Route, Routes } from "react-router-dom";
import Deals from "./Deals/Deals";
import Vegetables from "./Food/Vegetables";
import Beverages from "./Beverages/Tea";
import Household from "./Household/Household";
import PersonalCare from "./PersonalCare/PersonalCare";
import MostPopular from "./MostPopular/MostPopular";
import Fruits from "./Food/Fruits";
import Meat from "./Food/Meat";
import Footer from "./Footer/Footer";
import Copyright from "./components/Copyright";
import Dairy from "./Food/Dairy";
import Bakery from "./Food/Bakery";
import Cereals from "./Food/Cereals";
import Pasta from "./Food/Pasta";
import Fish from "./Food/Fish";
import ShippingAndReturns from "./ShippingAndReturns";
import TermsAndCondition from "./TermsAndCondition";
import PaymentMethods from "./PaymentMethods";
import Tea from "./Beverages/Tea";
import Coffee from "./Beverages/Coffee";
import SoftDrinks from "./Beverages/SoftDrinks";
import Beer from "./Beverages/Beer";
import Wine from "./Beverages/Wine";
import DetailsPage from "./components/DetailsPage";



function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/deals" element={<Deals />} />

        <Route path="/food">
          <Route path="/food/vegetables" element={<Vegetables />} />
          <Route path="/food/fruits" element={<Fruits />} />
            <Route path="/food/fruits/details/:fruitId" element={<DetailsPage/>}/>
            <Route path="/food/vegetables/details/:vegetableId" element={<DetailsPage/>}/>
   
          <Route path="/food/meat" element={<Meat />} />
          <Route path="/food/fish" element={<Fish />} />
          <Route path="/food/dairy" element={<Dairy />} />
          <Route path="/food/bakery" element={<Bakery />} />
          <Route path="/food/pasta" element={<Pasta />} />
          <Route path="/food/cereals" element={<Cereals />} />
        </Route>
        <Route path="/beverages" element={<Beverages />}>
          <Route path="/beverages/tea" element={<Tea />} />
          <Route path="/beverages/coffee" element={<Coffee/>} />
          <Route path="/beverages/softDrinks" element={<SoftDrinks/>} />
          <Route path="/beverages/beer" element={<Beer />} />
          <Route path="/beverages/wine" element={<Wine />} />
        </Route>
        <Route path="/household" element={<Household />} />
        <Route path="/personalCare" element={<PersonalCare />} />
        <Route path="/mostPopular" element={<MostPopular />} />
        <Route path="/shipping" element={<ShippingAndReturns />} />
        <Route path="/terms" element={<TermsAndCondition />} />
        <Route path="/payment" element={<PaymentMethods />} />
      </Routes>
      <Footer />
      <Copyright />
    </div>
  );
}

export default App;
