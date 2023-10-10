import { useEffect, useState} from "react";
import { rankedMovies } from "../services/rankedMovies";

export const useTopMovies = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    rankedMovies()
      .then(topMovies => {
        setMovies(topMovies);
        setLoading(false);
      })
      .catch(error => {
        console.error(error);
        setLoading(false);
      });
  }, []);


  return { movies, loading };
};
