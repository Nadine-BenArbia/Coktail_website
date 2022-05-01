import axios from "axios";
import { useEffect, useState } from "react";

const useGetCocktailList = () => {
  const [drinks, setDrinks] = useState([]);
  const [loading, setloading] = useState(true);
  const [isError, setisError] = useState(false);

  useEffect(() => {
    try {
      setloading(true);
      axios
        .get("https://www.thecocktaildb.com/api/json/v1/1/search.php?s")
        .then((res) => {
          setDrinks(res.data.drinks);
          setloading(false);
        });
    } catch (error) {
      console.log(error);
      setisError(true);
    }
  }, []);
  return { drinks, loading, isError };
};
export default useGetCocktailList;
