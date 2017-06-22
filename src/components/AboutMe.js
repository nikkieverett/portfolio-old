import React from 'react';

class AboutMe extends React.Component {
  render(){
    return(
      <section className="about-me" id="about-me">
        <h2>about me</h2>
        <h3>Hello, I’m a UI/UX Designer & Frontend Developer from Dallas, Texas.</h3>
        <ul className="contact-info">
          <li>name: nikki everett</li>
          <li>email: nikki.everett@outlook.com</li>
          <li>phone: 214-399-1731</li>
        </ul>
        <button>download resume</button>
      </section>
    )
  }
}

export default AboutMe;
