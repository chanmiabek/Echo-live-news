import React from "react";
import NewsLogo from "../assets/news.png";

const Navbar = ({ setCategory }) => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
      <div className="container-fluid">
        <a className="navbar-brand d-flex align-items-center gap-2" href="/" aria-label="Media News home">
          <img className="site-logo" src={NewsLogo} alt="" />
          <span className="brand-name">MEDIA NEWS</span>
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <button className="nav-link btn btn-link p-2" onClick={() => setCategory("general")}>
                Home
              </button>
            </li>
            <li className="nav-item">
              <button className="nav-link btn btn-link p-2" onClick={() => setCategory("technology")}>
                Technology
              </button>
            </li>
            <li className="nav-item">
              <button className="nav-link btn btn-link p-2" onClick={() => setCategory("business")}>
                Business
              </button>
            </li>
            <li className="nav-item">
              <button className="nav-link btn btn-link p-2" onClick={() => setCategory("health")}>
                Health
              </button>
            </li>
            <li className="nav-item">
              <button className="nav-link btn btn-link p-2" onClick={() => setCategory("science")}>
                Science
              </button>
            </li>
            <li className="nav-item">
              <button className="nav-link btn btn-link p-2" onClick={() => setCategory("sports")}>
                Sports
              </button>
            </li>
            <li className="nav-item">
              <button className="nav-link btn btn-link p-2" onClick={() => setCategory("entertainment")}>
                Entertainment
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
