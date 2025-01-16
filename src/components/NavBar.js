import React, { useContext, useEffect } from 'react'
import { NavLink } from "react-router-dom";
import AuthContext from '../context/AuthContext';
import ThemeContext from '../context/ThemeContext';

const NavBar = ({ title }) => {

  const authContext = useContext(AuthContext);
  const {theme, toggleTheme} = useContext(ThemeContext);

  return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" >
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/">{title}</NavLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item"><NavLink className="nav-link" to="/">Home</NavLink></li>

              <li className="nav-item"><NavLink className="nav-link" to="/business">Business</NavLink></li>
              <li className="nav-item"><NavLink className="nav-link" to="/entertainment">Entertainment</NavLink></li>
              <li className="nav-item"><NavLink className="nav-link" to="/general">General</NavLink></li>
              <li className="nav-item"><NavLink className="nav-link" to="/health">Health</NavLink></li>
              <li className="nav-item"><NavLink className="nav-link" to="/science">Science</NavLink></li>
              <li className="nav-item"><NavLink className="nav-link" to="/sports">Sports</NavLink></li>
              <li className="nav-item"><NavLink className="nav-link" to="/technology">Technology</NavLink></li>
              {/* <li className="nav-item"><NavLink className="nav-link" to="/weather">Weather</NavLink></li>
              <li className="nav-item"><NavLink className="nav-link" to="/weatherClassWidget">Weather Class Widget</NavLink></li>
              <li className="nav-item"><NavLink className="nav-link" to="/editProfile">Edit Profile</NavLink></li> */}
            </ul>
            {/* <span style={{color:"white", display: 'inline-block'}}> Welcome {authContext.state.name} is { authContext.state.subscribed ? "Subscribed" : "Not subscribed"} !</span>
            {authContext.state.subscribed && <button className="btn btn-primary" onClick={ () => authContext.updateAuth() }> Logout</button>}
            {!authContext.state.subscribed && <button className="btn btn-primary" onClick={ () => authContext.updateAuth() }> Login</button>} */}
            <button className={`btn btn-primary ${ theme == 'light' ? 'btn-dark' : 'btn-light' }`} onClick={toggleTheme} >
              <i className={`bi bi-sun text-${ theme == 'light' ? 'btn-dark' : 'btn-light' }`}></i>
            </button>
          </div>
        </div>
      </nav>
  )
}

export default NavBar; 