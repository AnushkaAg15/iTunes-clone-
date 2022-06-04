import React, { Component } from 'react'
import applogo from './assets/applogo.png'
import { Link } from 'react-router-dom'
export default class Navbar extends Component {
  render() {
    return (
      <div>
        <nav class='navbar navbar-light bg-light'>
          <a class='navbar-brand' href='/'>
            <img src={applogo} width='80' height='40' alt='' />
          </a>
          <Link to='/favourites' class='navbar-brand'>
            <i class='fas fa-heart mr-2'></i>
            <b>Favourites</b>
          </Link>
        </nav>
      </div>
    )
  }
}
