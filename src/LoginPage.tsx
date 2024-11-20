import React from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginPage.css';

const LoginPage: React.FC = () => {
  const navigate = useNavigate();

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    navigate('/landing');
  };
  return (
    <div className="login-page">
      <div className="login-left">
        <h1>Artcyclopedia</h1>
      </div>
      <div className="login-right">
        <h2>Login your Account</h2>
        <form>
          <div className="input-group">
            <label htmlFor="username">Username</label>
            <input type="text" id="username" placeholder="Username" />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" placeholder="Password" />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
