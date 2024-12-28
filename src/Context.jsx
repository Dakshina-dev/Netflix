import React, { createContext, useEffect, useState } from "react";
export const contextData = createContext();

const Context = ({children}) => {

  const title = document.location.pathname
  const [data, setData] = useState([])
  console.log(title);

  const url = `https://api.themoviedb.org/3/movie${title==="/"?"/popular":title}?language=en-US&page=1`;
  
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
  }, [url]);

  console.log(data);

  return (
    <contextData.Provider value={data}>
    {children}
    </contextData.Provider>
    )
};

export default Context;
