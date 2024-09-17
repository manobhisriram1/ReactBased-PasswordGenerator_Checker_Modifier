import React, { useState } from 'react';

const PasswordChecker = () => {
  const [password, setPassword] = useState('');
  const [strength, setStrength] = useState('');
  const [criteria, setCriteria] = useState('');

  const checkPasswordStrength = () => {
    if (password.length >= 12) {
      setStrength('Strong');
    } else if (password.length >= 8) {
      setStrength('Moderate');
    } else {
      setStrength('Weak');
    }

    const criteriaMet = /[A-Z]/.test(password) &&
                        /[a-z]/.test(password) &&
                        /[0-9]/.test(password) &&
                        /[^A-Za-z0-9]/.test(password);
    setCriteria(criteriaMet ? "Meets criteria" : "Doesn't meet criteria");
  };

  return (
    <div className="input-container">
      <label htmlFor="password">Enter your password:</label>
      <input
        type="password"
        id="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="button" onClick={checkPasswordStrength}>Check Strength</button>
      <div className="strength-container">
        <p id="password-strength" className={strength.toLowerCase()}>{strength}</p>
        <p id="password-criteria">{criteria}</p>
      </div>
    </div>
  );
};

export default PasswordChecker;
