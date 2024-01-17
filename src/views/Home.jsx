import React from 'react';
import NavigationItem from '../component/NavigationItem';

const Home = () => {
  return (
    <>
      <nav style={navbarStyle}>
        {/* <img style={imageStyle} src="../src/assets/image/home2.png" alt="home" /> */}
      </nav>

      <div className="container-fluid my-3 my-md-5" style={containerStyle}>
        <h1 style={h}>Challange Task</h1>
        <NavigationItem to="/count-duration" label="Count Duration"/>
        <NavigationItem to="/currency-convert" label="Currency Convert"/>
        <NavigationItem to="/mobile-legend" label="Mobile Legend"/>
        <NavigationItem to="/tic-tac-toe" label="Tic Tac Toe"/>
        <NavigationItem to="/matching-card" label="Matching Card"/>
        <NavigationItem to="/salary-calculating" label="Salary Calculating"/>
        <NavigationItem to="/word-scramb" label="Word Scramb"/>
      </div>
    </>
  );
}


const navbarStyle = {
  backgroundColor: '#4C5B6C',
  width: '100%',
  display: 'flex',
  alignItems: 'center',
};

const h = {
  fontWeight: 'bold',
  marginBottom: '15px'
}

const imageStyle = {
  padding: '10px',
  width: '80px',
  marginLeft: '35px',
};

const containerStyle = {
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  alignItems: 'center',
};

export default Home;
