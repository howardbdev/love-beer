import React from 'react';
import { NavLink } from 'react-router-dom';

/* Add basic styling for NavLinks */
const link = {
  width: '100px',
  padding: '12px',
  margin: '0 6px 6px',
  background: 'blue',
  textDecoration: 'none',
  color: 'white',
}

/* add the navbar component */
const Navbar = () =>
  <div>
    <NavLink
      to="/"
      /* set exact so it knows only to only set activeStyle when route is deeply equal to link */
      exact
      /* add styling to Navlink */
      style={link}
      /* add prop for activeStyle */
      activeStyle={{
        background: 'darkblue'
      }}
    >Home</NavLink>
    <NavLink
      to="/about"
      exact
      style={link}
      activeStyle={{
        background: 'darkblue'
      }}
    >About</NavLink>
    <NavLink
      to="/search"
      exact
      style={link}
      activeStyle={{
        background: 'darkblue'
      }}
    >Search</NavLink>
    <NavLink
      to="/login"
      exact
      style={link}
      activeStyle={{
        background: 'darkblue'
      }}
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

  // <label htmlFor="username">Username</label>
  //
  // <label htmlFor="password">Password</label>
