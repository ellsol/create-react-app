import React, { Component } from 'react';
import './style.css';

import {Link} from 'react-router-dom'

class Navigation extends Component {
  render() {
    return (
      <ul className="Navigation">
        <li>
                <Link to={'/'}>
                    <div>Page1</div>
                </Link>
        </li>
        <li>
                <Link to={'/detail'}>
                    <div>Page1</div>
                </Link></li>
      </ul>
    );
  }
}

export default Navigation;
