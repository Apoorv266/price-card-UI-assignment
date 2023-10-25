import React from 'react'
import "../Styles/Homepage.css"

const Navbar = () => {
  return (
    <>
     <nav className="main-nav">
        <h1>OpenCloudBSS</h1>
        <div className="nav-links">
            <a href="">Consumer</a>
            <a href="">Commercial</a>
            <span className="tag">Coming soon</span>
            <a href="">Shop</a>
            <a href="">Support</a>
        </div>
        <input type="text"/>
        <span>Search</span>
        <img
        src={require("../Assets/seach.png")}
        alt=""
        className="search-img"
        width={"30px"}
      />
        <div className="nav-icons">
        </div>
    </nav>
    </>
  )
}

export default Navbar