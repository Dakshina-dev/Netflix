import React, { useEffect, useState } from "react";
import { IoMdPlay } from "react-icons/io";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { Link } from "react-router-dom";



const Banner = () => {
  const url = `https://api.themoviedb.org/3/tv/${71446}?language=en-US`;
  const [data, setData] = useState([]);

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
  }, []);

  console.log(data);

  return (
    <div className="relative top-20 md:top-0 md:z-10">
     <div>
     <div>
        <img
          className="lg:h-dvh lg:w-dvw"
          src={"https://image.tmdb.org/t/p/original/" + data.backdrop_path}
          alt=""
        />
        <div className="absolute bottom-2 md:bottom-8 left-5 lg:left-16 lg:bottom-20 p-2 lg:p-10">
        <div className="flex z-40 flex-col gap-2 lg:gap-5">
          <h2 className="text-white font-bold text-2xl lg:text-6xl">{data.name}</h2>
          <h3 className="text-gray-300 font-medium lg:text-xl">" {data.tagline}.. "</h3>
          <div className="flex  gap-2 lg:gap-5">
            <a href={data.homepage} className="px-2 py-1 md:px-6 md:py-2 font-semibold text-white bg-[#E50914] flex items-center gap-1"><IoMdPlay/>Play Now</a>
            <Link to={`/tv/${data.id}`}>
            <button className="px-2 py-1 md:px-6 md:py-2 font-semibold text-white border border-[#E50914] flex items-center gap-1"><IoMdInformationCircleOutline/>More Info</button>
            </Link>
          </div>
        </div>
      </div>
      </div>
     </div>
    </div>
  );
};

export default Banner;

//71446
