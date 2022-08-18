import { useState, useEffect } from "react";
import { AllHouses } from "../houses.js"

export const useHouses = () => {
  const [state, setstate] = useState([]);
//Fetch houses from Json file
  useEffect(() => {
    setstate(AllHouses)
  }, [])

  return { state, setstate}
}
