import React from 'react'
import Trailer from './Trailer'

const Trailersection = () => {
  return (
    <div className='relative top-[860px] px-5'>
      <h2 className='text-white px-5 font-semibold text-2xl'>Trending Trailers</h2>
      <div className='p-5 grid grid-cols-1 sm:grid-cols-2 container mx-auto  lg:grid-cols-3 gap-5 items-center justify-center'>
      <Trailer  idvalue="movie/299536"/>
      <Trailer idvalue="movie/762509"/>
      <Trailer idvalue="movie/939243"/>
      <Trailer idvalue="movie/1005331"/>
      <Trailer idvalue="movie/102382"/>
      <Trailer idvalue="movie/1184918"/>
      </div>
    </div>
  )
}

export default Trailersection