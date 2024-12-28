import React, { useEffect, useState } from "react";

const Trailer = ({idvalue}) => {
  const [data, setData] = useState([]);

  console.log(idvalue);

  console.log(data);
  const url = `https://api.themoviedb.org/3/${idvalue}/videos`;
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
      .then((json) => json.results)
      .then((jsonData)=>(jsonData.filter((data)=>data.type==="Trailer")))
      .then((data)=>(data[0]))
      .then((data)=>setData(data))

  },[url]);
  


  return (
    <div className="">
    <iframe 
    key={data.id}
  className="video p-2"
  title="Youtube player"
  sandbox="allow-same-origin allow-forms allow-popups allow-scripts allow-presentation"
  src={`https://youtube.com/embed/${data.key}`} 
></iframe>
</div>
  )
}

export default Trailer;

