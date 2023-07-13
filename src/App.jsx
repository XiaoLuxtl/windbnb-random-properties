import { useContext } from "react";
import { Card } from "./components/Card";
import { Navbar } from "./components/Navbar";
import { genLocation } from "./utils/genLocation";
import { LocationContext } from "./context/location";

function App() {
  const { country } = useContext(LocationContext);

  const { location } = genLocation(6, country);

  return (
    <>
      <Navbar />
      <div className="w-11/12 max-w-11/12 md:max-w-screen-xl m-auto">
        <h2 className="py-6 text-gray-900 dark:text-stone-100 text-2xl font-bold">
          Stays in {country}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-fit md:w-full m-auto">
          {location.stay.map((data) => (
            <Card key={data.id} data={data} />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
