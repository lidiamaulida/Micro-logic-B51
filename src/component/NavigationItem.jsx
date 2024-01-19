import React from 'react';
import { Link } from 'react-router-dom';

const NavigationItem = ({ to, label }) => {
  return (
    <Link to={to}>
      <button style={buttonStyle} className="btn" type="submit">
        {label}
      </button>
    </Link>
  );
}

const buttonStyle = {
  backgroundColor: '#77ACC7',
  width: '235px',
  marginTop: '5px',
  margin: '15px',
  height: '50px',
  fontWeight: 'bold',
  borderRadius: '10px 10px 10px 10px',
  color: 'white'

};

export default NavigationItem;