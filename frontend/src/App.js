import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Register from './pages/Register';
import AuthRoute from './components/AuthRoute';
import Admin from './pages/Admin';
import { useState } from 'react';
const App = () => {
  const [user, setUser] = useState(null);
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route element={<AuthRoute setUser={setUser} />}>
          <Route path='/' element={<Dashboard />} />
          <Route path='/admin' element={<Admin user={user} />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
