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
import Login from './components/Pages/Shared/Account/Login/Login';
import AllCourses from './components/Pages/Shared/AcademicCourses/AllCourses';
import Dashboard from './components/Pages/Shared/Account/Dashboard/Dashboard';
import Payment from './components/Pages/Shared/Account/Payment/Payment';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/login" element={<Login />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/refund" element={<Refund />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/counseling" element={<Counseling />} />
          <Route path="/allCourses" element={<AllCourses />} />
          <Route path="/courses/:id" element={<CourseDetails />} />
          <Route path="/addToCart/:id" element={<AddToCart />} />
          <Route path="/checkout/:id" element={<Checkout/>} />
          <Route path="/payment/:id" element={<Payment/>} />
          <Route path="/dashboard" element={<Dashboard/>} />
        </Routes>
      </Router>
    </AuthProvider >

  );
}

export default App;
