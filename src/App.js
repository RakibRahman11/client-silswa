import './App.css';
import AuthProvider from './components/Pages/AuthProvider/AuthProvider';
import Home from './components/Pages/FrontPages/Home/Home';

function App() {
  return (
    <AuthProvider>
      <Home></Home>
    </AuthProvider>

  );
}

export default App;
