import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  const navigate = useNavigate();

  const formSubmit = async (e) => {
    e.preventDefault();

    try {
      const request = await fetch('/api/v1/auth/login', {
        method: 'POST',
        headers: {
          Authorization: 'Basic ' + btoa(username + ':' + password),
        },
      });

      const data = await request.json();

      if (request.status === 200) {
        localStorage.setItem('loggedIn', true);
        navigate('/');
      } else {
        alert(data.message);
      }
    } catch (e) {
      alert('Server error');
      console.log(e);
    }
  };

  useEffect(() => {
    if (localStorage.getItem('loggedIn')) {
      navigate('/');
    }
  }, []);

  return (
    <div className='container'>
      <h1 className='text-center'>Login Form !</h1>
      <form onSubmit={formSubmit}>
        <div className='mb-3'>
          <label htmlFor='exampleInputEmail1' className='form-label'>
            Username
          </label>
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            type='text'
            className='form-control'
            id='exampleInputEmail1'
          />
        </div>
        <div className='mb-3'>
          <label htmlFor='exampleInputPassword1' className='form-label'>
            Password
          </label>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type='password'
            className='form-control'
            id='exampleInputPassword1'
          />
        </div>

        <button type='submit' className='btn btn-primary w-100'>
          Login
        </button>
      </form>
      <Link to='/register'>Register</Link>
    </div>
  );
};

export default Login;
