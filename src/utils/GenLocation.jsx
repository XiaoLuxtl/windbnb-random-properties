import { useContext } from "react";
import { genDescription } from "./genDescription";
import { LocationContext } from "../context/location";

function randomNumber(min, max, int = true) {
  min = Math.ceil(min);
  max = Math.floor(max);
  if (!int) return Math.random() * (max - min) + min;
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function isSuperHost() {
  const randomNumber = Math.random();
  return randomNumber <= 0.1;
}

export function GenLocation(n = 1) {
  const location = { stay: [] };

  const { country, city } = useContext(LocationContext);

  let i = 0;
  while (i < n) {
    let tmpId = randomNumber(1000000000, 9999999990);
    let { type, description } = genDescription();
    let isSuper = isSuperHost();

    let tmpLoc = {
      id: tmpId,
      country: country,
      city: city,
      super: isSuper,
      rate: isSuper
        ? randomNumber(3.75, 5, false).toFixed(2)
        : randomNumber(1, 5, false).toFixed(2),
      type: type,
      description: description,
      info: {
        beds: randomNumber(1, 4),
        rooms: randomNumber(1, 3),
        clean: randomNumber(0.25, 5, false).toFixed(2),
      },
      pictures: [
        {
          id: tmpId + 1,
          picture: `./imgs/${randomNumber(1, 35)}.jpeg`,
        },
        {
          id: tmpId + 2,
          picture: `./imgs/${randomNumber(1, 35)}.jpeg`,
        },
        {
          id: tmpId + 3,
          picture: `./imgs/${randomNumber(1, 35)}.jpeg`,
        },
      ],
    };

    location["stay"].push(tmpLoc);
    i++;
  }

  return { location };
}
