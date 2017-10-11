import React from 'react';
import { NavLink } from 'react-router-dom';

const link = {
  width: '100px',
  padding: '12px',
  margin: '0 6px 6px',
  background: 'rgb(223, 62, 19)',
  textDecoration: 'none',
  color: 'white',
}

const activeLink = {
  background: 'rgb(234, 211, 189)',
  color: "black",
}

const Navbar = () =>
  <div className="navbar">
    <NavLink
      to="/"
      exact
      style={link}
      activeStyle={activeLink}
    >Home</NavLink>
    <NavLink
      to="/about"
      exact
      style={link}
      activeStyle={activeLink}
    >About</NavLink>
    <NavLink
      to="/search"
      exact
      style={link}
      activeStyle={activeLink}
    >Search</NavLink>
    <NavLink
      to="/beers/"
      exact
      style={link}
      activeStyle={activeLink}
    >All Beers</NavLink>
    <NavLink
      to="/beers/new"
      exact
      style={link}
      activeStyle={activeLink}
    >New Beer</NavLink>
    <NavLink
      to="/login"
      exact
      style={link}
      activeStyle={activeLink}
    >Login</NavLink>
  </div>;

export const Home = () => {
  return (
    <div className="title">
      <h1>Home</h1>
      <h3>Vote or add a beer!!!</h3>
    </div>
  )
}

export const About = () => {
  return (
    <div className="about">
      <h3>About</h3>
      <p>This is just a fun little website for you to vote on or add your favorite beer!</p>
  </div>
  )
}

export const Login = () =>
  <form>
    <h4 className="title" >Login</h4>
    <h5 className="title">Log in to vote!</h5>
    <div>
      <input type="text" name="username" placeholder="Username" />
    </div>
    <div>
      <input type="password" name="password" placeholder="Password" />
    </div>
    <input className="login-button" type="submit" value="Join the party!" />
  </form>;

export const Search = () =>
  <form>
    <h4 className="title" >Search</h4>
    <h5 className="title">Search for a beer by name and brewer.  Capitalization does not matter, but spelling does!</h5>
    <div>
      <input type="text" name="beer_name" placeholder="Beer Name" />
    </div>
    <div>
      <input type="text" name="brewer_name" placeholder="Brewer Name" />
    </div>
    <input className="login-button" type="submit" value="Search" />
  </form>;

  export default Navbar;
