import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <nav class="navbar navbar-expand-sm ">
        <div class="container-fluid ">
          <a class="navbar-brand" href="#">UltraFitness</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <i class="fa-solid fa-bars"></i>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav  ms-auto">
              <li class="nav-item ">
                <a class="nav-link " aria-current="page" href="#">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Blog</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Deals</a>
              </li>
              <li class="nav-item">
                <a class="nav-link ">Success </a>
              </li>
              <li class="nav-item">
                <a class="nav-link ">About</a>
              </li>
              <li class="nav-item">
                <a class="nav-link ">Register</a>
              </li>
            </ul>
          </div>
          
        </div>
      </nav>
    );
};

export default Header;