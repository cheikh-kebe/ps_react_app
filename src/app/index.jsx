import React, { useEffect, useState, useMemo } from "react";
import { houses } from "../houses"
//Components
import { Header } from "../Components/Header";
import { FeaturedHouse } from "../Components/FeaturedHouse";
import { HouseFilter } from "../Components/HouseFilter"
//styles
import "./App.css";
//router
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Searchresult } from "../Components/SearchResult";

export const App = () => {
  const [state, setState] = useState([]);
//Fetch houses from Json file
  useEffect(() => {
    setState(houses)
  }, [])

  const featuredHouse = useMemo(() => {
    if (state.length) {
      const randomIndex = Math.floor(Math.random() * state.length);
      return state[randomIndex]
    }
  }, [state])


  return (
    <Router>
      <div className="container">
        <Header subtitle='Providing houses all over the world!' />
        <HouseFilter allHouses={houses} />
        <Routes>
          <Route path="/" exact element={<FeaturedHouse house={featuredHouse}/>}/>
          <Route path="/searchresults/:country" element={<Searchresult allHouses={houses}/>}/>
        </Routes>
      </div>
    </Router>
  );
};
