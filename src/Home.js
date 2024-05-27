import React from 'react'
import Header from './components/Header'
import { Outlet, useLocation } from 'react-router-dom'
import Homebanner from './Homebanner';
import Bookticket from './components/Bookticket';

const Home = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  return (
    <>
   <div>

   <Header/>
      {isHomePage ? (
        // Home page specific content
        <div>
          <Homebanner/>
          <Bookticket/>
          {/* Add your home page data here */}
        </div>
      ) : (
        // Render nested routes for other pages
        <Outlet />
      )}
    </div>
    
   
    </>
  )
}

export default Home
