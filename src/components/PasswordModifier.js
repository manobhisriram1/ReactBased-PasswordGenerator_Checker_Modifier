import React, { useState } from 'react';

const PasswordModifier = () => {
  const [password, setPassword] = useState('');
  const [modifiedPassword, setModifiedPassword] = useState('');

  const modifyPassword = () => {
    const charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+';
    let newPassword = password;

    for (let i = 0; i < 4; i++) {
      newPassword += charset.charAt(Math.floor(Math.random() * charset.length));
    }

    setModifiedPassword(`Modified Password: ${newPassword}`);
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
      <button type="button" onClick={modifyPassword}>Modify Password</button>
      <p id="modifiedPassword">{modifiedPassword}</p>
    </div>
  );
};

export default PasswordModifier;
