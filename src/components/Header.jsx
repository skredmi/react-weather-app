import React from "react";

export const Header = ({ setQuery }) => {
  const cities = [
    {
      id: 1,
      title: "Moscow",
    },
    {
      id: 2,
      title: "London",
    },
    {
      id: 3,
      title: "Paris",
    },
    {
      id: 4,
      title: "New York",
    },
    {
      id: 5,
      title: "Berlin",
    },
  ];
  return (
    <div className="flex items-center justify-around my-6">
      {cities.map((city) => (
        <button
          key={city.id}
          className="text-white text-lg font-medium transition ease-out hover:scale-125"
          onClick={() => setQuery({ q: city.title })}
        >
          {city.title}
        </button>
      ))}
    </div>
  );
};
