import { useState, useEffect } from "react";
import axios from "axios";
import "../assets/styling/MobileLegend.css"
import NavBar from '../component/NavBar';

const MobileLegend = () => {
  const [searchText, setSearchText] = useState("");
  const [heroes, setHeroes] = useState([]);
  const [filteredHeroes, setFilteredHeroes] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [originalHeroes, setOriginalHeroes] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get('https://api.dazelpro.com/mobile-legends/hero');
      const heroData = response.data.hero;
      setHeroes(heroData);
      setFilteredHeroes(heroData);
      setOriginalHeroes(heroData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const searchForPlayer = () => {
    const lowerSearchText = searchText.toLowerCase();
    const filteredHeroes = heroes.filter(hero =>
      hero.hero_name.toLowerCase().includes(lowerSearchText) ||
      hero.hero_role.toLowerCase().includes(lowerSearchText)
    );

    setFilteredHeroes(filteredHeroes);

    setErrorMessage(
      filteredHeroes.length === 0
        ? "No heroes found with the given search criteria."
        : ""
    );
  };

  const resetSearch = () => {
    setSearchText("");
    setFilteredHeroes(originalHeroes);
    setErrorMessage("");
  };

  const renderHeroes = () => {
    return filteredHeroes.map(hero => (
      <div key={hero.hero_id}>
        <div className="list-container">
          <div className="hero-data">
            <h4>{hero.hero_name}</h4>
            <p>Role: {hero.hero_role}</p>
            <p>Specialty: {hero.hero_specially}</p>
          </div>
        </div>
      </div>
    ));
  };

  return (
    <>
    <NavBar/>
    <div className="hero-box">
      <h1>Lists of Mobile Legend Heroes</h1>
      <div className="hero-button">
      <input 
        type="text" 
        className="form-control"
        value={searchText} 
        onChange={e => setSearchText(e.target.value)}
      />
      <button onClick={searchForPlayer}>Search</button>
      <button onClick={resetSearch}>Reset</button>
      </div>

      {errorMessage && <p>{errorMessage}</p>}

      {renderHeroes()}
    </div>
    </>
  );
};

export default MobileLegend;
