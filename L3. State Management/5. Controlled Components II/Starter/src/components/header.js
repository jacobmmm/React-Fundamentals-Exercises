import logo from "../logo.svg"
import "../App.css"
import React from "react"
const Header = () => {
   return( <>
    <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">ReactND - Coding Practice</h1>
    </header>
    <h2>Shopping List</h2>
   </> )
}

export default Header