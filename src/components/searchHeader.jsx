import React from "react"

function SearchHeader({onSearch}){
    function animateSearch() {
        document.querySelector(".search").classList.toggle("active");
    }

    return (
        <div className="search">
          <input
            type="search"
            onChange={onSearch}
            placeholder="Search..."
            className="input"
          />
          <div href="#" className="btn_search" onClick={animateSearch}>
            <i className="fas fa-search"></i>
          </div>
        </div>
    )
}

export default SearchHeader;