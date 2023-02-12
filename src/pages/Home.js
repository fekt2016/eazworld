import React from 'react'
import { Outlet } from 'react-router-dom';
import Header from '../component/Layout/Header';
import Nav from '../component/Layout/Nav';

const HomePage = () => {
  return (
    <>
    <Nav  />
    <Header  />
    <main>
    <Outlet  />
    </main>

    </>
  )
}

export default HomePage;