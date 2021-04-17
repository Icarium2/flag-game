import React, { useState } from "react";
import FlagCard from "./components/flag-card/FlagCard";
import SubmitAnswer from "./components/submit-answer/SubmitAnswer";
import Score from "./components/score/Score.js";

function App() {
  const [country, setCountry] = useState();

  return (
    <div>
      <Score />
      <FlagCard setCountry={setCountry} country={country} />

      <SubmitAnswer country={country} />
    </div>
  );
}

export default App;
