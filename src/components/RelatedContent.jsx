import React, { useEffect, useState } from "react";
import { IoIosArrowForward } from "react-icons/io";


const RelatedContent = ({idData,textValue}) => {
  const [data, setData] = useState([]);
  console.log(idData);

  const url =
    `https://api.themoviedb.org/3/${idData}/recommendations`;
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
      .then((json) => setData(json.results))
      .catch((err) => console.error(err));
  }, []);
  console.log(data);

  return (
    <div className="relative">
      <div className="absolute max-w-full pb-5 md:top-12">
        <h2 className="text-white font-semibold text-2xl px-5">Recommended {textValue}</h2>
        <div className="flex overflow-x-auto gap-5 p-5">
          {data.map((data,index) => {
            return (
              <a href={`/${idData.includes("tv")? "tv" : "movie"}/${data.id}`} key={index}>
              <div className="min-w-48 p-2 pt-5">
                <div className="relative">
                  <img className="" src={"https://image.tmdb.org/t/p/original/"+data.poster_path} alt="" />
                </div>
              </div>
          </a>
            )
          })}
      <div className="">
        <IoIosArrowForward className="z-50 fill-black/80 bg-gray-500/50 rounded-full py-1 absolute top-[50%] bottom-[50%] right-2 size-10  shadow-lg "/>
      </div>
        </div>
      </div>
    </div>
  );
};

export default RelatedContent;
