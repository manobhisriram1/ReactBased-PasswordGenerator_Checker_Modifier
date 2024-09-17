import React, { useState } from 'react';

const PasswordGenerator = () => {
  const [length, setLength] = useState(12);
  const [includeUppercase, setIncludeUppercase] = useState(false);
  const [includeLowercase, setIncludeLowercase] = useState(false);
  const [includeNumbers, setIncludeNumbers] = useState(false);
  const [includeSpecialChars, setIncludeSpecialChars] = useState(false);
  const [generatedPassword, setGeneratedPassword] = useState('');

  const generatePassword = () => {
    if (!includeUppercase && !includeLowercase && !includeNumbers && !includeSpecialChars) {
      alert('Select at least one character type.');
      return;
    }

    let charset = '';
    if (includeUppercase) charset += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (includeLowercase) charset += 'abcdefghijklmnopqrstuvwxyz';
    if (includeNumbers) charset += '0123456789';
    if (includeSpecialChars) charset += '!@#$%^&*()_+';

    let password = '';
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      password += charset.charAt(randomIndex);
    }

    setGeneratedPassword(`Generated Password: ${password}`);
  };

  return (
    <form>
      <label htmlFor="passwordLength">Length:</label>
      <input
        type="number"
        id="passwordLength"
        min="8"
        max="128"
        value={length}
        onChange={(e) => setLength(e.target.value)}
        required
      />
      <div className="checkbox-group">
        <label htmlFor="includeUppercase">
          <input
            type="checkbox"
            id="includeUppercase"
            checked={includeUppercase}
            onChange={() => setIncludeUppercase(!includeUppercase)}
          />
          Include Uppercase
        </label>
        <label htmlFor="includeLowercase">
          <input
            type="checkbox"
            id="includeLowercase"
            checked={includeLowercase}
            onChange={() => setIncludeLowercase(!includeLowercase)}
          />
          Include Lowercase
        </label>
        <label htmlFor="includeNumbers">
          <input
            type="checkbox"
            id="includeNumbers"
            checked={includeNumbers}
            onChange={() => setIncludeNumbers(!includeNumbers)}
          />
          Include Numbers
        </label>
        <label htmlFor="includeSpecialChars">
          <input
            type="checkbox"
            id="includeSpecialChars"
            checked={includeSpecialChars}
            onChange={() => setIncludeSpecialChars(!includeSpecialChars)}
          />
          Include Special Characters
        </label>
      </div>
      <button type="button" onClick={generatePassword}>Generate Password</button>
      <p id="generatedPassword">{generatedPassword}</p>
    </form>
  );
};

export default PasswordGenerator;
