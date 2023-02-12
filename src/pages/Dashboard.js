import React from 'react'
import { Outlet } from 'react-router-dom';

const Dashboard = () => {
  return (
    <>
    <h1>Dashboard</h1>
    <main> <Outlet  /></main>
    </>
  )
}

export default Dashboard;