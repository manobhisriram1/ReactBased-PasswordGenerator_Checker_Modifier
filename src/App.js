import React from 'react';
import PasswordGenerator from './components/PasswordGenerator';
import PasswordChecker from './components/PasswordChecker';
import PasswordModifier from './components/PasswordModifier';
import './App.css';

function App() {
  return (
    <div className="container">
      <header>
        <h1>Cybersecurity Tools</h1>
        <nav>
          <ul>
            <li><a href="#generator">Password Generator</a></li>
            <li><a href="#checker">Password Checker</a></li>
            <li><a href="#modifier">Password Modifier</a></li>
          </ul>
        </nav>
      </header>
      <section id="generator" className="section">
        <h2>Password Generator</h2>
        <PasswordGenerator />
      </section>
      <section id="checker" className="section">
        <h2>Password Strength Checker</h2>
        <PasswordChecker />
      </section>
      <section id="modifier" className="section">
        <h2>Password Modifier</h2>
        <PasswordModifier />
      </section>
    </div>
  );
}

export default App;
