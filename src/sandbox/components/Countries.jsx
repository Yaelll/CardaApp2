import { Avatar, Box, Typography } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";

export default function Countries() {
  const [countries, setCountries] = useState();

  useEffect(() => {
    getDataFromAPI();
  }, []);
  const getDataFromAPI = async () => {
    try {
      const { data } = await axios.get("https://restcountries.com/v3.1/all");
      console.log(data);

      setCountries(data);
    } catch (err) {
      console.log(err.message);
    }
  };
  return (
    <div>
      {countries?.map((country) => (
        <Box
          display="flex"
          sx={{ justifyContent: "space-between" }}
          key={JSON.stringify(country)}
        >
          <Avatar src={country.flags.png} alt={`${country.name.common} flag`} />
          <Typography sx={{ width: "150px" }}>{country.name.common}</Typography>
          <Typography sx={{ width: "150px" }}>
            {country.capital?.[0]}
          </Typography>
        </Box>
      ))}
    </div>
  );
}

//conditional rendering
//condition ? return if true : return if false
