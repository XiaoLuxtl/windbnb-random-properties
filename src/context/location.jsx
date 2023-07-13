import { createContext, useState } from "react";
import PropTypes from "prop-types";
import { getLocation } from "../utils/getLocation";

// creamos el contexto
export const LocationContext = createContext();

// luego lo proveemos
export function LocationProvider({ children }) {
  const [country, setCountry] = useState(getLocation().country);

  return (
    <LocationContext.Provider
      value={{
        country,
        setCountry,
      }}
    >
      {children}
    </LocationContext.Provider>
  );
}

LocationProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
