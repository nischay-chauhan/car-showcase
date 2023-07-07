'use client'
import React from 'react'
import { useState } from 'react'
import SearchManufacturer from './SearchManufacturer'

const SearchBar = () => {
    const [manufacturer, setmanufacturer] = useState('');

    const handleSearch = ()=>{

    }
  return (
    <form className='searchbar' onSubmit={handleSearch}>
        <div className='search__item'>
            <SearchManufacturer
            manufacturer = {manufacturer}
            setmanufacturer = {setmanufacturer}
            />

        </div>
    </form>
  )
}

export default SearchBar