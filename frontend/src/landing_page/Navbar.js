import React from 'react';
import {Link} from "react-router-dom";

function Navbar() {
  return ( 
    <>
      <nav className="navbar navbar-expand-lg border-bottom" style={{ backgroundColor: "#FFF" }}>
        <div className="container-fluid p-2 mx-5">
          <Link to="/"><img src="media/images/logo.svg"className="ms-4"  style={{ width: "20%",marginRight:"100px" }} alt="logo" /></Link>
          
          <button 
            className="navbar-toggler" 
            type="button" 
            data-bs-toggle="collapse" 
            data-bs-target="#navbarSupportedContent" 
            aria-controls="navbarSupportedContent" 
            aria-expanded="false" 
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ">
              <li className="nav-item">
                <Link className="nav-link text-muted" aria-current="page" to="/signup">Signup</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-muted" to="/about">About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-muted" to="/products">Products</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-muted" to="/pricing">Pricing</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-muted" to="/support">Support</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
