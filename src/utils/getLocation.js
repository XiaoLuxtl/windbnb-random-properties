import citiesList from "../mocks/cities.json";

export function getLocation() {
  const data = citiesList;

  // Get an array of all countries
  const countries = Object.keys(data);

  // Select a random country
  const randomCountry = countries[Math.floor(Math.random() * countries.length)];

  // Retrieve the cities array for the random country
  const cities = data[randomCountry];

  // Generate a random index within the range of cities array
  const randomIndex = Math.floor(Math.random() * cities.length);

  // Retrieve the random city
  const randomCity = cities[randomIndex];

  return { country: randomCountry, city: randomCity };
}