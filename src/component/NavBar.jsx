import { Link } from "react-router-dom"

const NavBar = () => {
    return (
        <Link to={'/'}>
          <nav style={navbarStyle}>
           {/* <img style={imageStyle} src="./src/assets/image/home2.png" alt="home" /> */}
           <h1 style={h}>Lets try it!</h1>
         </nav>
        </Link>
        
     )

}

const navbarStyle = {
  backgroundColor: '#4C5B6C',
  width: '100%',
  height: '60px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
};

const h = {
    fontWeight: 'bold',
    fontFamily: 'hasklig',
    color: '#ffffff'
  }
  
const imageStyle = {
    padding: '10px',
    width: '80px',
    marginLeft: '35px',
  };

export default NavBar;