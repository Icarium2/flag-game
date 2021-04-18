import React, { useState } from "react";
import { FlagCard, SubmitAnswer, Score, Logo } from "./components";
import { CountryCodes } from "./components/flag-card/CountryCodes";

function App() {
  const [country, setCountry] = useState({});
  const [score, setScore] = useState(0);
  const [availableCountries, setAvailableCountries] = useState(CountryCodes);
  const randomCountry =
    availableCountries[
      Math.floor(Math.random() * availableCountries.length - 1)
    ];

  return (
    <div>
      <Logo />
      <Score score={score} />
      <FlagCard
        setCountry={setCountry}
        country={country}
        randomCountry={randomCountry}
      />
      <Score score={score} />
      <SubmitAnswer
        setCountry={setCountry}
        country={country}
        score={score}
        setScore={setScore}
        randomCountry={randomCountry}
      />
    </div>
  );
}

export default App;
