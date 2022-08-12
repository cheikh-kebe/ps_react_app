import { useState, useEffect } from "react";
import { houses } from "../houses.js"

export const useHouses = () => {
  const [state, setstate] = useState([]);
//Fetch houses from Json file
  useEffect(() => {
    setstate(houses)
  }, [])

  return { state, setstate}
}
