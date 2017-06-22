import React from 'react';

class NavBar extends React.Component {
  render(){
    return(
      <nav>
        <div className="logo">
          <img src="me.jpeg" alt="logo"></img>
        </div>
        <ul className="page-links">
          <li><a href="#about-me">about me</a></li>
          <li><a href="#skills">skills</a></li>
          <li><a href="#portfolio">portfolio</a></li>
          <li><a href="#blog">blog</a></li>
          <li><a href="#contact">contact</a></li>
        </ul>
      </nav>
    )
  }
}

export default NavBar;
