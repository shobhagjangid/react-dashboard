//import logo from './logo.svg';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Signin from './Pages/Signin/Signin';
import Signup from './Pages/Signin/Signup';
import DashboardHome from './Pages/Dashboard/DashboardHome'; // Ensure the path is correct
import Profile from './Pages/Dashboard/Profile';
import Tables from './Pages/Dashboard/Tables';
import Billing from './Pages/Dashboard/Billing';


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Signin />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/login' element={<Signin />} />
          <Route path='/dashboard' element={<DashboardHome />} /> {/* Fixed typo here */}

          <Route path='/profile' element={<Profile />} />
          <Route path='/tables' element={<Tables />} />
          <Route path='/billing' element={<Billing />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
