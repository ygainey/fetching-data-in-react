import { useState } from 'react';

const WeatherSearch = ({fetchData}) => {
  const [city, setCity] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    fetchData(city)
    setCity('');
  };

  return (
    <section>
      <h2>Search</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="city">Enter a city:</label>
        <input
          id="city"
          type="text"
          value={city}
          onChange={(event) => setCity(event.target.value)}
        />
        <button type="submit">Search</button>
      </form>
    </section>
  );
};

export default WeatherSearch;
