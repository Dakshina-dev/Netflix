import React, { useContext, useState } from "react";
import  { contextData } from "../Context";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";


const Cards = () => {
  const data = useContext(contextData);


  return (
   <>
    <div className="relative flex items-center justify-center top-10 pb-10">
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

export default Cards;
