import React, { useEffect, useState } from "react";
import {
  FinishGame,
  FlagCard,
  SubmitAnswer,
  Score,
  Logo,
  Guesses,
} from "./components";
import { CountryCodes } from "./components/flag-card/CountryCodes";

function App() {
  const restartGame = () => {
    setScore(0);
    setGuesses(15);
    setAvailableCountries(CountryCodes);
    setGameOver(false);
  };

  const removeCountry = (country) => {
    setAvailableCountries(
      availableCountries.filter((c) => {
        return country.alpha3Code !== c;
      })
    );
  };
  const [gameOver, setGameOver] = useState(false);
  const [country, setCountry] = useState({});
  const [score, setScore] = useState(0);
  const [guesses, setGuesses] = useState(15);
  const [availableCountries, setAvailableCountries] = useState(CountryCodes);
  const randomCountry =
    availableCountries[
      Math.floor(Math.random() * availableCountries.length - 1)
    ];

  useEffect(() => {
    if (guesses === 0 || availableCountries.length === 0) {
      setGameOver(true);
    }
  }, [guesses, availableCountries]);

  return (
    <div>
      <Logo />
      {gameOver && <FinishGame score={score} restartGame={restartGame} />}
      {!gameOver && (
        <>
          <FlagCard
            setCountry={setCountry}
            country={country}
            randomCountry={randomCountry}
          />
          <Score score={score} />
          <Guesses guesses={guesses} />
          <SubmitAnswer
            setCountry={setCountry}
            country={country}
            score={score}
            setScore={setScore}
            randomCountry={randomCountry}
            guesses={guesses}
            setGuesses={setGuesses}
            removeCountry={removeCountry}
          />
        </>
      )}
    </div>
  );
}

export default App;
