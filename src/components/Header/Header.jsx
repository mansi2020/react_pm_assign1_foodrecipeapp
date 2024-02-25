import React from 'react'
import Navbar from './Navbar'
import SearchForm from './SearchForm'
import "./Header.css";
import "./../../App.css"

const Header = () => {
  return (
    <>
        <header className='header'>
            <Navbar/>
            <div className='header-content flex align-center justify-center flex-column text-center'>
              <SearchForm/>
              <h1 className='text-white header header-title ls-2'>What are your favourite dish?</h1>
              <p className='text-uppercase text-white my-3 ls-1'>personalize your experience</p>
            </div>
            
        </header>
      
    </>
  )
}

export default Header
