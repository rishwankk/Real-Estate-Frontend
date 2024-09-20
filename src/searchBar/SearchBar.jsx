import React, { useState } from 'react'
import "./searchbar.scss"

const SearchBar = () => {
    const[query,setQuery]=useState({type:"buy", location:"",minPrice:0, maxPrice:0})
  return (
    <div className='searchBar'>
        <div className="type">
            <button>Buy</button>
            <button>Rent</button>
        </div>
        <form >
            <input type="text" name='location' placeholder='City Location' />
            <input type="text" name='minprice'min={0} max={10000000} placeholder='Min Price' />
            <input type="text" name='maxprice' min={0} max={10000000} placeholder='Max Price' />
            <button ><img src="/search.png" alt="" /></button>
        </form>
    </div>
  )
}

export default SearchBar