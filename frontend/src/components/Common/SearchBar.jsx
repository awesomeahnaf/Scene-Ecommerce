import React, { useState } from 'react'
import { FaMagnifyingGlass } from "react-icons/fa6";
import { HiMiniXMark } from "react-icons/hi2";

const SearchBar = () => {


const [searchTerm, setSearchTerm] = useState("");
const [isOpen, setIsOpen] = useState(false);
const handleSearchToggle = () => {
    setIsOpen(!isOpen);
}


const handleSearch = (e) => {
  e.preventDefault();
  console.log("Search Term:", searchTerm )
  setIsOpen(false);
}

  return (
    <div className={`flex items-center justify-center w-full transition-all duration-300 ${isOpen?"absolute top-0 left-0 w-full bg-amber-950 h-24 z-50": "w-auto"} `}>
      {isOpen ? 
      (<form onSubmit={handleSearch} className='relative flex items-center justify-center w-full'>

        <div className='relative w-1/2'>
            <input type="text" 
            placeholder='Search' 
            value={searchTerm} 
            onChange={(e) => setSearchTerm(e.target.value)}
            className='bg-gray-100 px-3 py-2 pr-24 rounded-lg focus:outline-none w-full placeholder:text'/>

            {/* Search icon */}
            <button type='submit' className='absolute right-12 top-1/2 transform -translate-y-1/2 text-yellow-800 hover:text-gray-800'>
                <FaMagnifyingGlass className='h-5 w-5'/>
            </button>

            {/* Close button */}
            <button type='button' 
            onClick={handleSearchToggle}
            className='absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-600 hover:text-gray-800'>
                <HiMiniXMark className='h-6 w-6'/>
            </button>
        </div>
      </form>
      ):(
        <button onClick={handleSearchToggle}>
            <FaMagnifyingGlass className='h-6 w-6'/>
        </button>
      )}
    </div>
  )
}

export default SearchBar
