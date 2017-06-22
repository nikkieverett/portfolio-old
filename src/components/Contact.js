import React from 'react';

class Contact extends React.Component {
  render(){
    return(
      <section className="contact" id="contact">
        <h2>contact</h2>
        <h3>general inquiries: nikki.everett@outlook.com</h3>
        <form>
          <input type="text" placeholder="* your name"></input>
          <input type="text" placeholder="* your email"></input>
          <input type="text" placeholder="your message"></input>
          <input type="submit"></input>
        </form>
      </section>
    )
  }
}

export default Contact;
