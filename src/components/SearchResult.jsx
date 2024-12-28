import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const SearchResult = ({ query }) => {
  const [data, setData] = useState([]);
  console.log(query);

  useEffect(() => {
    const url = `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1`;
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZWM1M2RlN2M5NDM0YmQzNmVmZGJhNDI5YzVkNmEyYSIsIm5iZiI6MTcyOTc5MTU2MC43OTksInN1YiI6IjY3MWE4NjQ4NmU0MjEwNzgwZjc4ZDAzNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9JgKr4d2QjiZiBV28Ytm5UbKFVDEtjzE68VWLJSuZOo",
      },
    };

    fetch(url, options)
      .then((res) => res.json())
      .then((json) => setData(json.results))
      .catch((err) => console.error(err));
  }, []);
  console.log(data);

  return (
    <>
       <div className="absolute flex items-center justify-center top-10 pb-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-10 gap-10 justify-center items-center">
              {data.map((data) => {
                return (
                  <div key={data.id} className="max-w-60 flex flex-col justify-between gap-5 p-2 ">
                    <Link to={`/movie/${data.id}`}>
                    <div className="">
                      <img className="w-60"
                        src={"https://image.tmdb.org/t/p/original/" + data.poster_path}
                        alt={data.title}/>
                    </div>
                    <div className="flex flex-col gap-2 mt-2">
                      <h2 className="min-h-12 font-semibold text-white">{data.title}</h2>
                      <h2 className="text-red-600">Release: {data.release_date}</h2>
                      <h3 className="flex items-center gap-2 text-white"><FaStar className="fill-yellow-400"/> {Number(data.vote_average).toFixed(1)} / 10 ({data.vote_count} votes)</h3>
                    </div>
                    </Link>
                  </div>
                )
              })}
            </div>
          </div>
    </>
  );
};

export default SearchResult;
