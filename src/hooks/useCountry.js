import { useEffect } from "react";
import { useState } from "react";

const useCountry = (cname) => {
  const [country, setCountry] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchCountyInfo = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        `https://restcountries.com/v3.1/name/${cname}`
      );
      const data = await response.json();
      setCountry(data);
    } catch (error) {
      setError("Country is not found!");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCountyInfo();
  }, [cname]);

  return {
    loading,
    error,
    country,
  };
};

export default useCountry;
