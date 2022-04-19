import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AuthProvider from './components/AuthProvider/AuthProvider';
import Home from './components/Pages/FrontPages/Home/Home';
import AboutUs from './components/Pages/Company/AboutUs/AboutUs';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
        </Routes>
      </Router>
    </AuthProvider >

  );
}

export default App;
