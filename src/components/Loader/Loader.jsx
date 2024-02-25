import React from 'react'
import {loader} from "./../../utils/images"
import "./Loader.css"

const Loader = () => {
  return (
    <div className='loader my-5'>
      <div className='container flex align-center justify-center'>
        <img src = {loader} alt = "" />
      </div>
    </div>
  )
}

export default Loader
