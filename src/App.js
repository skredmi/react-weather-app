import { useEffect, useState } from "react";
import "./App.css";
import { Header } from "./components/Header";
import { Input } from "./components/Input";
import { Temperature } from "./components/Temperature";
import { TimeAndLocation } from "./components/TimeAndLocation";
import { getFormattedWeatherData } from "./services/weatherService";

function App() {
  const [query, setQuery] = useState({ q: "moscow" });
  const [units, setUnits] = useState("metric");
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      await getFormattedWeatherData({ ...query, units }).then((data) =>
        setWeather(data)
      );
    };

    fetchWeather();
  }, [query, units]);

  const changeBackgroundByTemperature = () => {
    if (!weather) {
      return "from-cyan-700 to-blue-700";
    }
    const limit = units === "metric" ? 30 : 86;
    if (weather.temp <= limit) {
      return "from-cyan-700 to-blue-700";
    } else {
      return "from-yellow-700 to-orange-700";
    }
  };

  return (
    <div
      className={`mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br h-fit shadow-xl shadow-gray-400 ${changeBackgroundByTemperature()}`}
    >
      <Header setQuery={setQuery} />
      <Input setQuery={setQuery} units={units} setUnits={setUnits} />
      {weather && (
        <div>
          <TimeAndLocation weather={weather} />
          <Temperature weather={weather} />
        </div>
      )}
    </div>
  );
}

export default App;
