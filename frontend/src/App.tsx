import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import { Home } from './pages/Home';
import { Movies } from './pages/Movies';
import { Podcast } from './pages/Podcast';
import { Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <Navbar bg="primary" variant="dark" expand="lg">
        <Navbar.Brand href="/">Devon Wolsleger's Awesome website</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Link to="/" className="nav-link">
              Home
            </Link>
            <Link to="/Movies" className="nav-link">
              Movies
            </Link>
            <Link to="/Podcast" className="nav-link">
              Podcast
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Movies" element={<Movies />} />
        <Route path="/Podcast" element={<Podcast />} />
      </Routes>
    </>
  );
}

export default App;
