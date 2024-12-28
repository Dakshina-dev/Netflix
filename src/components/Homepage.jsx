import React from 'react'
import Context from '../Context'
import Banner from './Banner'
import Trendingmovies from './Trendingmovies'
import Trendingshows from './Trendingshows'
import Trailersection from './Trailersection'
import HomepageFooter from './HomepageFooter'
 

 const Homepage = () => {
  
  return (
    <Context> 
    <Banner/>
    <Trendingmovies/>
    <Trendingshows/>
    <Trailersection/>
    <HomepageFooter/>
    </Context>
  )
}

export default Homepage