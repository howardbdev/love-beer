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

let Navbar = () =>
  <div className="navbar">
    <NavLink
      className="navlink"
      to="/"
      exact
      style={link}
      activeStyle={activeLink}
    >Home</NavLink>
    <NavLink
      className="navlink"
      to="/about"
      exact
      style={link}
      activeStyle={activeLink}
    >About</NavLink>
    <NavLink
      className="navlink"
      to="/beers/"
      exact
      style={link}
      activeStyle={activeLink}
    >All Beers</NavLink>
    <NavLink
      className="navlink"
      to="/beers/new"
      exact
      style={link}
      activeStyle={activeLink}
    >New Beer</NavLink>

  </div>;

export const Home = () => {
  return (
    <div className="title">
      <h1>Welcome</h1>
      <h3>Vote or add a beer!!!</h3>
      <h4>I don't know about you, but this picture makes me thirsty.</h4>
    </div>
  )
}

export const About = () => {
  return (
    <div className="about">
      <h3>About</h3>
      <p>This is just a fun little website for you to vote on or add your favorite beer!</p>
      <p>Vote from the index page, or click on a beer to see and add comments.</p>
      <p>Click on 'New Beer' to add your favorite beer!</p>
  </div>
  )
}

export const Login = () =>
  <form>
    <h4 className="title" >Login</h4>
    <h5 className="title">Log in to vote!</h5>
    <div>
      <input className="login" type="text" name="username" placeholder="Username" />
    </div>
    <div>
      <input className="login" type="password" name="password" placeholder="Password" />
    </div>
    <input className="login-button" type="submit" value="Join the party!" />
  </form>;

export default Navbar;
