import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import Trailer from "./Trailer";
import RelatedContent from "./RelatedContent";
import { IoMdPlay } from "react-icons/io";

const MovieDetails = () => {
  const title = document.location.pathname;
  const [data, setData] = useState([]);
  console.log(title);

  const url = `https://api.themoviedb.org/3${title}?language=en-US`;

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZWM1M2RlN2M5NDM0YmQzNmVmZGJhNDI5YzVkNmEyYSIsIm5iZiI6MTcyOTc5MTU2MC43OTksInN1YiI6IjY3MWE4NjQ4NmU0MjEwNzgwZjc4ZDAzNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9JgKr4d2QjiZiBV28Ytm5UbKFVDEtjzE68VWLJSuZOo",
    },
  };

  useEffect(() => {
    fetch(url, options)
      .then((res) => res.json())
      .then((json) => setData(json))
      .catch((err) => console.error(err));
  }, [url]);

  console.log(data);

  return (
    <div className="relative top-24 z-10 text-white">
      <div className="">
        <div className="flex justify-center items-center p-5">
          <div className="relative flex items-center justify-center flex-col lg:flex-row lg:justify-between lg:gap-20">
            <img
              className="w-60 border-4 border-white"
              src={"https://image.tmdb.org/t/p/original/" + data.poster_path}
              alt=""
            />
            <div className="flex flex-col  gap-3 max-w-[500px] ">
              <h2 className="text-2xl font-semibold uppercase md:text-start text-center p-5 md:px-0 lg:text-3xl">
                {data.name} <br /> <span className="text-sm font-normal"> {data.tagline==="" ? null : "(" + data.tagline + ")"} </span>
              </h2>
              <div className="flex justify-between">
                <h3 className="flex items-center gap-2 text-white">
                  <FaStar className="fill-yellow-400" />
                  {Number(data.vote_average).toFixed(1)} / 10 ({data.vote_count}
                  votes)
                </h3>

                <h2 className="">Status: {data.status}</h2>
              </div>
              <h2 className="font-semibold">Movie Description:</h2>
              <h2 className="text-gray-400 text-justify lg:max-w-[500px]">
                {data.overview}
              </h2>
              <a
                href={data.homepage}
                className="mt-5 md:mt-2 w-fit px-2 py-2 md:px-6 md:py-2 font-semibold text-white bg-[#E50914] flex items-center gap-1"
              >
                <IoMdPlay />
                Watch Now
              </a>
            </div>
          </div>
        </div>
      </div>
      <div>
        <RelatedContent idData={title} textValue={"Series"} />
      </div>
    </div>
  );
};

export default MovieDetails;
