import React from 'react'
import "./DashBoard.css";

function Header(props) {
  return (
    <div className="header">
    <nav className="header-navBar">
      <div className="box-1">
        <h4>Study Material</h4>
      </div>
      <div className="box-2">
        <h4>Timmer :  {props.minutes} : {props.seconds} </h4>
      </div>
    </nav>
  </div>
  )
}

export default Header