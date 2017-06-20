import React from 'react';

class NavBar extends React.Component {
  render(){
    return(
      <nav>
        <div className="logo"></div>
        <ul>
          <li>about me</li>
          <li>skills</li>
          <li>portfolio</li>
          <li>blog</li>
          <li>contact</li>
        </ul>
      </nav>
    )
  }
}

export default NavBar;
