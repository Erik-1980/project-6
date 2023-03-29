import { useState, useEffect } from 'react';

function Accordion({ countries }) {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div>
      {countries.map((country, index) => (
        <div key={index}>
          <button onClick={() => handleClick(index)}>
            {country.name}
          </button>
          {activeIndex === index && (
            <div>
              <p>Capital: {country.capital}</p>
              <img src={country.flag} alt={country.name} />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

function AccordionUse() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch('https://restcountries.com/v2/all')
      .then(response => response.json())
      .then(data => setCountries(data));
  }, []);

  return (
    <div>
      <h1>List of Countries</h1>
      <Accordion countries={countries} />
    </div>
  );
}

export default AccordionUse;