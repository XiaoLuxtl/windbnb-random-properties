import { createContext, useState } from "react";
import PropTypes from "prop-types";

import citiesList from "../mocks/cities.json";
import { useEffect } from "react";

// create context
export const LocationContext = createContext();

// provide the context
export function LocationProvider({ children }) {
  const [country, setCountry] = useState(() => {
    // Get an array of all countries
    const countries = Object.keys(citiesList);

    // Select a random country
    return countries[Math.floor(Math.random() * countries.length)];
  });
  const [city, setCity] = useState(() => {
    // Retrieve the cities array for the random country
    const cities = citiesList[country];

    // Generate a random index within the range of cities array
    const randomIndex = Math.floor(Math.random() * cities.length);

    const tmpCity = cities[randomIndex];

    return tmpCity;
  });

  useEffect(() => {
    // Retrieve the cities array for the random country
    const cities = citiesList[country];

    // Generate a random index within the range of cities array
    const randomIndex = Math.floor(Math.random() * cities.length);

    const tmpCity = cities[randomIndex];

    setCity(tmpCity);
  }, [country]);

  return (
    <LocationContext.Provider
      value={{
        country,
        setCountry,
        city,
        setCity,
      }}
    >
      {children}
    </LocationContext.Provider>
  );
}

LocationProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
