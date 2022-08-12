import React from "react";
import { houses } from "../houses"
//Components
import { Header } from "../Components/Header";
import { FeaturedHouse } from "../Components/FeaturedHouse";
import { HouseFilter } from "../Components/HouseFilter"
import { HouseQueried } from "../Components/House/HouseQueried";
import { Searchresult } from "../Components/SearchResult";
//styles
import "./App.css";
//router
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//hooks
import  { useHouses }  from "../Hooks/useHouses";
import { useFeaturedHouse } from "../Hooks/useFeaturedHouse";

export const App = () => {
  const { state } = useHouses()
  const { featuredHouse } = useFeaturedHouse(state)


  return (
    <Router>
      <div className="container">
        <Header subtitle='Providing houses all over the world!' />
        <HouseFilter allHouses={houses} />
        <Routes>
          <Route path="/" exact element={<FeaturedHouse house={featuredHouse}/>}/>
          <Route path="/searchresults/:country" element={<Searchresult allHouses={houses}/>}/>
          <Route path="/house/:id" element={<HouseQueried allHouses={houses}/>}/>          
        </Routes>
      </div>
    </Router>
  );
};
