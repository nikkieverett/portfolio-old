import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import AboutMe from './components/AboutMe.js';
import Blog from './components/Blog.js';
import Contact from './components/Contact.js';
import Footer from './components/Footer.js';
import Header from './components/Header.js';
import NavBar from './components/NavBar.js';
import Portfolio from './components/Portfolio.js';
import Skills from './components/Skills.js';

class App extends React.Component {
  render(){
    return(
      <div className="page-container">
        <div className="left-side">
          <NavBar />
        </div>
        <div className="right-side">
          <Header />
          <AboutMe />
          <Skills />
          <Portfolio />
          <Blog />
          <Contact />
          <Footer />
        </div>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
