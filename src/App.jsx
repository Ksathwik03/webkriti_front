import './App.css';
import {HashRouter as Router, Route} from 'react-router-dom';
import HomePage from './pages/users/Homepage'
import Admin from './pages/admin/Admin';
import Userdashboard from './pages/users/Userdashboard';
import Login from './pages/users/Login';
import SignUp from './pages/users/SignUp';
import Navbar from './pages/components/Navbar';
import Admindashboard from './pages/admin/Admindashboard';

function App() {
  return (
    <>
    <Navbar />
    <Router>
      <Route path='/' exact component={HomePage} />
      <Route path='/admin' exact component={Admin} />
      <Route path='/admin/:adminId/dashboard' exact component={Admindashboard} />
      <Route path='/:userId/dashboard' exact component={Userdashboard} />
      <Route path='/login' exact component={Login} />
      <Route path='/signup' exact component={SignUp} />
    </Router>
    </>
  );
}

export default App;
