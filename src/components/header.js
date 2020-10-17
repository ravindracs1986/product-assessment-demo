import React, {Component} from 'react';


export default class Header extends Component {
  render() {
    return (
      <nav className="blue-grey darken-3" >
        <div className="nav-wrapper">
          <div className="brand-logo">
            <a href="#">
            products-assessment-demo
            </a>
          </div>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
           
          </ul>
        </div>
      </nav>
    )
  }
}
