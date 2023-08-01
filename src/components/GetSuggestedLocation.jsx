import { useState } from "react";
import citiesList from "../mocks/cities.json";
import { useContext } from "react";
import { LocationContext } from "../context/location";

export function GetSuggestedLocation() {
  const [inputValue, setInputValue] = useState("");
  const [matchedSuggestions, setMatchedSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);

  const countries = Object.keys(citiesList);

  const { setCountry } = useContext(LocationContext);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);

    if (!value) return;

    const matched = countries
      .filter((country) =>
        country.toLowerCase().startsWith(value.toLowerCase())
      )
      .slice(0, 5);
    setMatchedSuggestions(matched);
    setShowSuggestions(true);
  };

  const handleSuggestionClick = (suggestion) => {
    setInputValue(suggestion);
    setCountry(suggestion);
    setShowSuggestions(false);
    setActiveIndex(0);
  };

  const handleArrowKeys = (e) => {
    if (e.key === "ArrowUp") {
      setActiveIndex(
        activeIndex === 0 ? matchedSuggestions.length - 1 : activeIndex - 1
      );
    }

    if (e.key === "ArrowDown") {
      setActiveIndex(
        activeIndex === matchedSuggestions.length - 1 ? 0 : activeIndex + 1
      );
    }

    if (e.key === "Enter") {
      setInputValue(matchedSuggestions[activeIndex]);
      setCountry(matchedSuggestions[activeIndex]);
      setShowSuggestions(false);
      setActiveIndex(0);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        onKeyDown={handleArrowKeys}
      />
      {showSuggestions && (
        <ul className="py-2 text-sm bg-black/10 dark:bg-white/10 text-gray-700 dark:text-gray-200">
          {matchedSuggestions.map((suggestion, index) => (
            <li
              className={`block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white transition ease-in ${
                activeIndex === index ? "bg-gray-100 dark:bg-gray-600" : ""
              }`}
              key={index}
              onClick={() => handleSuggestionClick(suggestion)}
            >
              {suggestion}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
