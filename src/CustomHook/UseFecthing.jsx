import axios from "axios";
import { useEffect, useState } from "react";

export function useFeching(query) {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState("");

  useEffect(
    function () {
      // callback?.();

      const controller = new AbortController();

      // signal : DOM 요청과 통신하거나 취소하는데 사용하는 AbortSignal 객체 인터페이스를 반환

      async function fetchMovies() {
        console.log("fetchMovies()~~!!");
        try {
          setIsError("");
          setIsLoading(true);

          const res = await axios.get(
            `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_KEY}&s=${query}`,
            { signal: controller.signal }
          );
          console.log("fetchMovie res data", res);
          if (res.data.Response === "False") throw new Error("Movie not found");
          setMovies(res.data.Search);
          setIsError(false);
        } catch (err) {
          if (err.name !== "AbortError") {
            console.log(err.message);
            setIsError(err.message);
          }
        } finally {
          setIsLoading(false);
        }
      }

      if (query.length < 3) {
        setMovies([]);

        return;
      }

      fetchMovies();

      //데이터 패칭시 불필요한 리랜더링을 제한해 주는 방법중 하나
      //1. 디바운싱,쓰로틀링  2. Controller.abort()
      return function () {
        controller.abort();
      };
    },
    [query]
  );

  return { movies, isLoading, isError };
}
