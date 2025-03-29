import React from 'react';
import { Link } from 'react-router-dom';
import './Button.css';

const Button = ({ text, onClick, className, type = 'button', to, isLink = false }) => {
  if (isLink && to) {
    return (
      <Link to={to} className={`button ${className || ''}`}>
        {text}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={`button ${className || ''}`}
    >
      {text}
    </button>
  );
};

export default Button;