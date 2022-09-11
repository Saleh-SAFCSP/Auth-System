import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
const Dashboard = () => {
  const navigate = useNavigate();
  const logout = async () => {
    const request = await fetch('/api/v1/auth/logout');
    if (request.status === 204) {
      localStorage.removeItem('loggedIn');
      navigate('/login');
    }
  };

  useEffect(() => {
    const fetchUser = async () => {
      const request = await fetch('/api/v1/todo');
      const data = await request.json();
      if (request.status === 401) {
        localStorage.removeItem('loggedIn');
        navigate('/login');
      }
    };
    fetchUser();
  }, [navigate]);

  return (
    <div className='container text-center'>
      <h1>Dashboard !</h1>
      <button onClick={logout} type='button' class='btn btn-danger mt-5 w-100'>
        Logout
      </button>
    </div>
  );
};

export default Dashboard;
