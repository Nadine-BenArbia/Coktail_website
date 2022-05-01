import React, { useState } from "react";
import useGetCocktailList from "../../Middleware/get.api";
import ImgMediaCard from "../Card/CoktailCard";

const SearchBar = () => {
  const { drinks } = useGetCocktailList();
  console.log("filter", drinks);
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="input-group rounded">
      <input
        type="search"
        className="form-control rounded"
        placeholder="Search"
        aria-label="Search"
        aria-describedby="search-addon"
        onChange={(event) => {
          setSearchTerm(event.target.value);
        }}
      />
      {drinks
        .filter((drinks) => {
          if (searchTerm == "") {
            return drinks;
          } else if (
            drinks.strDrink.toLowerCase().includes(searchTerm.toLowerCase())
          ) {
            return drinks;
          }
        })
        .map((strDrink) => {
          return (
            <div>
              <ImgMediaCard
                drinks={{
                  strDrink,
                }}
              />
            </div>
          );
        })}
    </div>
  );
};

export default SearchBar;
