import { Link } from "react-router-dom"

const NavBar = () => {
    return (
        <Link to={'/'}>
          <nav style={navbarStyle}>
            <img style={imageStyle} src="../src/assets/image/home2.png" alt="home" />
          </nav>
        </Link>
        
     )

}

const navbarStyle = {
    backgroundColor: '#4C5B6C',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
  };
  
  
const imageStyle = {
    padding: '10px',
    width: '80px',
    marginLeft: '35px',
  };

export default NavBar;