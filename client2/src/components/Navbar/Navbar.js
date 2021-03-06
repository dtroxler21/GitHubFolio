import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { LogoutNavbar } from '../';
import $ from 'jquery'

const logoSizing = {
  width: '30px',
  height: 'auto',
  margin: 'auto',
}

class Navbar extends Component {
  handleClick = (e, disabled) => {
    if (disabled) e.preventDefault()
    $('.navbar-collapse').collapse('hide');
  };

  render() {
    const { routes, style, logout } = this.props
    return (
      <div
        className='fixed-top'
        style={style}
      >
        <div className="container">
          <nav
            className="navbar navbar-expand-lg p-2 navbar-dark"
          >
          <span
            className="navbar-brand"
            style={{ fontFamily: 'lora', fontWeight: 'bold' }}
          >
            <img
              className='img-fluid pr-2'
              style={ logoSizing }
              src={require('../../images/githubfolio-gradient.png')}
              alt="GitHubFolio logo"
              />
              GitHubFolio
          </span>

            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNavDropdown"
              aria-controls="navbarNavDropdown"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarNavDropdown"
            >
              <ul className="ml-auto navbar-nav text-right">
                {
                  routes
                  &&
                  routes.map(route => {
                    const { path, label, disabled } = route
                    return (
                      <li
                        className='nav-item'
                        key={label}
                      >
                        <NavLink
                          exact
                          to={path}
                          className='nav-link'
                          activeClassName='active'
                          onClick={(e) => this.handleClick(e, disabled)}
                        >
                          {label}
                        </NavLink>
                      </li>
                    );
                  })
                }
                {
                  logout
                  &&
                  <LogoutNavbar />
                }
              </ul>
            </div>
          </nav>
        </div>
      </div>
    );
  }
}

Navbar.propTypes = {
  style: PropTypes.object.isRequired,
  routes: PropTypes.array.isRequired
};

export default Navbar
