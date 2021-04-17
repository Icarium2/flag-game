export const fetchCountry = async (callBack, randomCountry) => {
  const response = await fetch(
    `https://restcountries.eu/rest/v2/alpha/${randomCountry}`
  );
  const country = await response.json();
  callBack(country);
};
