import { Card } from "./components/Card";
import { genLocation } from "./utils/genLocation";

function App() {
  const { location } = genLocation(6);
  return (
    <div className="max-w-7xl m-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 w-fit m-auto">
        {location.stay.map((data) => (
          <Card key={data.id} data={data} />
        ))}
      </div>
    </div>
  );
}

export default App;
