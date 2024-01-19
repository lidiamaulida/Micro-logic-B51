import React from 'react';
import NavigationItem from '../component/NavigationItem';

const Home = () => {
  return (
    <>
      <nav style={navbarStyle}>
        {/* <img style={imageStyle} src="./src/assets/image/home2.png" alt="home" /> */}
        <h1 style={hjudul}>Lets try it!</h1>
      </nav>
      <div style={hbox}>
      <h1 style={h}>Challange Task</h1>
      <p style={p}>Explore Exciting Features Now!</p>
      <div className="container-fluid my-3 my-md-5" style={containerStyle}>
        <NavigationItem to="/count-duration" label="Count Duration"/>
        <NavigationItem to="/currency-convert" label="Currency Convert"/>
        <NavigationItem to="/mobile-legend" label="Mobile Legend"/>
        <NavigationItem to="/tic-tac-toe" label="Tic Tac Toe"/>
        <NavigationItem to="/matching-card" label="Matching Card"/>
        <NavigationItem to="/salary-calculating" label="Salary Calculating"/>
        <NavigationItem to="/word-scramb" label="Word Scramb"/>
      </div>
      </div>
    </>
  );
}


const navbarStyle = {
  backgroundColor: '#4C5B6C',
  width: '100%',
  height: '60px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
};

const hbox = {
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  justifyContent: 'center',
  height: '80vh',
}

const hjudul = {
  fontWeight: 'bold',
  fontFamily: 'hasklig',
  color: '#ffffff'
}

const h = {
  fontWeight: 'bold',
}

const p = {
  marginBottom: '-25px',
  fontSize: '16px'
}

const imageStyle = {
  padding: '10px',
  width: '80px',
  alignItems: 'start',
  marginLeft: '35px',
};

const containerStyle = {
  display: 'flex',
  justifyContent: 'center',
  flexWrap: 'wrap',
  alignItems: 'center',
  width: '80%',
  height: '35vh',
  padding: '20px',
};

export default Home;
