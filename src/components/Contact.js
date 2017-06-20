import React from 'react';

class Contact extends React.Component {
  render(){
    return(
      <section className="contact">
        <h1>contact</h1>
        <h2>general inquiries: nikki.everett@outlook.com</h2>
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
