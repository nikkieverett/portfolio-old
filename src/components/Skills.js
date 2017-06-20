import React from 'react';

class Skills extends React.Component {
  render(){
    return(
      <section className="skills">
        <div className="skill" id="html">
          <h3>html 5 / css 3</h3>
        </div>
        <div className="skill" id="js">
          <h3>javascript</h3>
        </div>
        <div className="skill" id="react">
          <h3>react js</h3>
        </div>
        <div className="skill" id="jquery">
          <h3>jQuery / AJAX</h3>
        </div>
        <div className="skill" id="express">
          <h3>express</h3>
        </div>
        <div className="skill" id="mongo">
          <h3>mongoDB</h3>
        </div>
      </section>
    )
  }
}

export default Skills;
