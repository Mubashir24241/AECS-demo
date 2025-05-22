import React, { useContext, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import { demoUsers } from '../data/demoData';

export default function Login() {
  const { login, setData } = useContext(AppContext);
  const navigate = useNavigate();
  const location = useLocation();

  const searchParams = new URLSearchParams(location.search);
  const loginType = searchParams.get('type'); // 'admin' or 'user'

  useEffect(() => {
    if (!loginType) {
      navigate('/');
    }
  }, [loginType]);

  const handleLogin = () => {
    login(loginType);
    setData(demoUsers); // use demo data
    if (loginType === 'admin') {
      navigate('/admin-dashboard');
    } else {
      navigate('/user-dashboard');
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 bg-white dark:bg-gray-800 p-6 rounded shadow">
      <h2 className="text-2xl font-bold mb-4 text-center capitalize">{loginType} Login</h2>
      <button
        onClick={handleLogin}
        className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded"
      >
        Log In as {loginType}
      </button>
    </div>
  );
}
