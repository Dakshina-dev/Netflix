import React from "react";
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom'
import Homepage from "./components/Homepage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Nowplaying from "./components/Nowplaying";
import Toprated from "./components/Toprated";
import Upcoming from "./components/Upcoming";
import Cards from "./components/Cards";
import MovieDetails from "./components/MovieDetails";
import SeriesDetails from "./components/SeriesDetails";
import SearchResult from "./components/SearchResult";

const App = () => {

  return (
  <Router classname="">
    <Header/>
    <Routes>
      <Route path="/" element={<div><Homepage/></div>} />
      <Route path="/now_playing" element={<div><Nowplaying/><Cards/><Footer/></div>}/>
      <Route path="/top_rated" element={<div><Toprated/><Cards/><Footer/></div>}/>
      <Route path="/upcoming" element={<div><Upcoming/><Cards/><Footer/></div>}/>
      <Route path="/movie/:id" element={<div><MovieDetails/></div>}/>
      <Route path="/tv/:id" element={<div><SeriesDetails/></div>}/>
      <Route path="/search" element={<div><SearchResult/></div>}/>
    </Routes>
  </Router>
  )
};

export default App;

// now_playing,popular,top_rated,upcoming

// https://api.themoviedb.org/3/movie/movie_id?language=en-US
