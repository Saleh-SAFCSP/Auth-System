import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  const navigate = useNavigate();

  const formSubmit = async (e) => {
    e.preventDefault();

    const bodyValue = {
      username,
      password,
    };

    try {
      const request = await fetch('/api/v1/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(bodyValue),
      });

      const data = await request.json();

      alert(data.message);
      if (request.status === 200) {
        navigate('/login');
      } else {
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
      <h1 className='text-center'>Register Form !</h1>
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
          Register
        </button>
      </form>
      <Link to='/Login'>Login</Link>
    </div>
  );
};

export default Register;
