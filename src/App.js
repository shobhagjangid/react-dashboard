//import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Signin from './Pages/Signin/Signin';
import Signup from './Pages/Signin/Signup';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DashbardHome from './Pages/Dashboard/DashbardHome';

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

        </Routes>
      </Router>



     






    </>
  );
}

export default App;
