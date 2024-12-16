//import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Signin from './Pages/Signin/Signin';
import Signup from './Pages/Signin/Signup';
import DashbardHome from './Pages/Dashboard/DashbardHome';
import Profile from './Pages/Dashboard/Profile';
import Tables from './Pages/Dashboard/Tables';
import Billing from './Pages/Dashboard/Billing';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <>



      <Router>
       
        <Routes>


          {/* <Route exact path='/' element={<Home/>} /> */}
          <Route exact path='/' element={<Signin />} />
          <Route exact path='/signup' element={<Signup />} />
          <Route exact path='/login' element={<Signin />} />
          <Route exact path='/dashboard' element={<DashbardHome />} />


          <Route exact path='/profile' element={<Profile />} />

          <Route exact path='/tables' element={<Tables />} />

          <Route exact path='/billing' element={<Billing />} />

        </Routes>
      </Router>



     






    </>
  );
}

export default App;
