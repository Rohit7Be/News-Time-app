import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="container-fluid d-flex justify-content-center">
        <img src="https://png.pngtree.com/png-vector/20220607/ourmid/pngtree-vector-news-icon-button-news-logo-vector-png-image_13830380.png" alt="" className="nav-icon" />
        <span className="navbar-brand mb-0 h1 fw-bold fs-1">News Time</span>
      </div>
      <div className="container-fluid d-flex justify-content-center">
      <span className='text-light '>Read latest news headlines, in just a click</span>
      </div>
    </nav>
  );
};

export default Navbar;