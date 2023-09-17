import { useEffect, useState } from "react";
import Boardrow from "./ch5/Boardrow";
import Square from "./ch5/Boardrow";
import Time from "./ch5/Time";
import Test1 from "./Test1";
import Test2 from "./Test2";
import axios from "axios";
import Nav from "./MovieComponent/Nav";
import Search from "./MovieComponent/Search";
import { useFeching } from "./CustomHook/UseFecthing";

function App() {
  const [wMovie, setWMovies] = useState([]);
  const [query, setQuery] = useState("");
  const { movies, isLoading, isError } = useFeching(query);
  console.log(movies);

  // useEffect(() => {
  // console.log("useEffect!!");

  //    async function fetchOMDB() {
  //    const res = await axios.get(
  //    `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_KEY}&s=inter`
  //);

  //console.log(res);
  //}
  //fetchOMDB();
  //  }, []);

  return (
    <div className='App'>
      <Nav>
        <Search query={query} setQuery={setQuery}></Search>
      </Nav>
      {/* 1주차 스터디 */}
      {/* <Test1></Test1>
      <Test2></Test2>
      <Boardrow></Boardrow>
      <Time></Time> */}
      {isLoading && <p> Loading.... 기달리삼..</p>}

      {!isLoading &&
        !isError &&
        movies.map((e, key) => (
          <div>
            <p key={key}>{e.Title}</p>
            <img src={e.Poster}></img>
          </div>
        ))}

      {isError && <h1>{isError}</h1>}
    </div>
  );
}

export default App;
