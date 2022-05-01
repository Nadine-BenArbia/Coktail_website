import React from "react";
import { CoktailList } from "../Components/CoktailList/CoktailList";
import SearchBar from "../Components/SearchBar/SearchBar";
import Footer from "../Layout/Footer/Footer";
import Header from "../Layout/Header/Header";
import "./HomeStyle.css";

const Home = () => {
  return (
    // const { drinks, loading, isError } = useGetCocktailList();
    // console.log("drink", drinks);
    <div>
      <Header />
      <SearchBar />
      <CoktailList />
      <Footer />
    </div>
  );
};

export default Home;
