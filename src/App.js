import React from 'react';
// import logo from './logo.svg';
import './App.css';
import ReactDOM from "react-dom"
// import { Component } from 'react';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="overlay overlay-slide-left" id="overlay">
          <nav>
            <ul>
              <li id="nav-1" className="slide-out-1"><a href="#home">Home</a></li>
              <li id="nav-2" className="slide-out-2"><a href="#about">About</a></li>
              <li id="nav-3" className="slide-out-3"><a href="#skills">Skills</a></li>
              <li id="nav-4" className="slide-out-4"><a href="#projects">Projects</a></li>
              <li id="nav-5" className="slide-out-5"><a href="#contact">Contact</a></li>
            </ul>
          </nav>
        </div>
        <div className="menu-bars" id="menu-bars">
          <div className="bar1"></div>
          <div className="bar2"></div>
          <div className="bar3"></div>
        </div>
        <section id="home"><a href="https://www.sukeerthirathan.com" rel="noreferrer" target="_blank">Sukeerthi Portfolio Page</a></section>
        <section id="about"><h1>Learn More About Me</h1></section>
        <section id="skills"><h1>These Are My Strengths</h1></section>
        <section id="projects"><h1>These Are My Results</h1></section>
        <section id="contact"><h1>Available Anytime</h1></section>
      </div>
    );
  }
}

export default App;
