import { useMemo } from "react";

export const useFeaturedHouse = (state) => {
  const featuredHouse = useMemo(() => {
    if (state.length) {
      const randomIndex = Math.floor(Math.random() * state.length);
      return state[randomIndex]
    }
  }, [state])
  return { featuredHouse }
};