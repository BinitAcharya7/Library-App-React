import React from 'react'
import Discounted from '../components/Discounted';
import Explore from '../components/Explore';
import Featured from '../components/Featured';
import Highlights from '../components/Highlights';
import Landing from '../components/Landing';
import { books } from '../data'

export default function Home() {
  return (
    <>
      <Landing />
      <Highlights />
      <Featured books={books}/>
      <Discounted books={books}/>
      <Explore />
    </>
  )
}
