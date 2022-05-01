import React from "react";
import ImgMediaCard from "../Card/CoktailCard";
import useGetCocktailList from "../../Middleware/get.api";
import "./ListStyled.css";

export const CoktailList = () => {
  const { drinks, loading, isError } = useGetCocktailList();
  console.log(drinks);
  return (
    <>
      <div className="app__card-list">
        {loading ? (
          <img
            src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pinterest.com%2Fpin%2F449726712791261583%2F&psig=AOvVaw14xbMLDNmv6i6riNLnTA4i&ust=1631726342780000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCLj6rr38_vICFQAAAAAdAAAAABAU"
            alt="loading"
          />
        ) : isError ? (
          <h1>error</h1>
        ) : (
          drinks.map(({ strDrink, strInstructions, strDrinkThumb }) => (
            <>
              <ImgMediaCard
                drinks={{
                  name: strDrink,
                  info: strInstructions,
                  img: strDrinkThumb,
                }}
                key={strDrink}
              />
            </>
          ))
        )}
      </div>
    </>
  );
};
