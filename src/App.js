import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AuthProvider from './components/AuthProvider/AuthProvider';
import Home from './components/Pages/FrontPages/Home/Home';
import AboutUs from './components/Pages/Company/AboutUs/AboutUs';
import PrivacyPolicy from './components/Pages/Company/PrivacyPolicy/PrivacyPolicy';
import Refund from './components/Pages/Company/Refund/Refund';
import Terms from './components/Pages/Company/Terms/Terms';
import Contact from './components/Pages/Company/Contact/Contact';
import Counseling from './components/Pages/FrontPages/Counseling/Counseling';
import CourseDetails from './components/Pages/Shared/CourseDetails/CourseDetails';
import AddToCart from './components/Pages/Shared/Account/AddToCart/AddToCart';
import Checkout from './components/Pages/Shared/Account/Checkout/Checkout';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/refund" element={<Refund />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/counseling" element={<Counseling />} />
          <Route path="/courses/:id" element={<CourseDetails />} />
          <Route path="/addToCart/:id" element={<AddToCart />} />
          <Route path="/checkout/:id" element={<Checkout/>} />
        </Routes>
      </Router>
    </AuthProvider >

  );
}

export default App;
