/**
 * Write-only the password as cookie
 */
import React, { useState } from 'react';
import { navigate } from 'gatsby'
import { getIsValidated, setSessionPassword } from '../utils/utils';

const styles = {
  wrapper: {
    height: '100vh',
    background: 'rgba(38, 191, 153, 0.9)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  successWrapper: {
    height: '0px',
  },
  input: {
    width: '100%',
    height: '48px',
    fontSize: '20px',
    textAlign: 'center',
    border: '0',
    borderRadius: '4px',
    marginTop: '24px'
  },
  button: {
    margin: 'auto',
    width: '181px',
    height: '56px',
    background: '#00A0D1',
    color: '#fff',
    fontWeight: 'bold',
    fontSize: '16px',
    borderRadius: '4px',
    transition: 'all 0.3s',
    marginTop: '24px',
    fontFamily: 'sans-serif',
    cursor: 'pointer',
    border: '0',
  },
  buttonHover: {
    background: '#00799e',
    color: '#fff',
    fontWeight: 'bold'
  },
};

const PasswordProtect = () => {
  const [password, setPassword] = useState('');
  const [isButtonHovered, buttonHover] = useState(false);
  const [isThemeHovered, themeHover] = useState(false);
  const [isSiteHovered, siteHover] = useState(false);

  const onSubmit = event => {
    event.preventDefault();
    setSessionPassword(password);
    navigate(location.href, { replace: true });
  }

// const PasswordProtect = () => {
//   const [password, setPassword] = useState('');
//   const [isButtonHovered, buttonHover] = useState(false);

//   let valid = getIsValidated()

//   console.info('is valid outside', valid)

//   const onSubmit = event => {
//     event.preventDefault();
//     valid = setSessionPassword(password);

//     console.info('valid in submit', valid)
//     window.location.reload();
//     valid = setSessionPassword(password);
//     console.info('valid in submit after', valid)
//   };

  return (
    <div
      id="pw-wrapper"
      // style={valid ? styles.successWrapper : styles.wrapper}
      // style={styles.wrapper}
      style={{
        height: '100vh',
        background: 'rgba(38, 191, 153, 0.9)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <h1 style={{ color: '#1f1f1f', marginBottom: '0px', paddingBottom: '0px' }}>
        Password Required
      </h1>
      <form
        onSubmit={onSubmit}
        style={{
          width: '320px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <input
          name="password"
          type="password"
          required
          placeholder="Password"
          value={password}
          onChange={event => setPassword(event.target.value)}
          style={styles.input}
        />

        <button
          type="submit"
          style={{
            ...styles.button,
            ...(isButtonHovered ? styles.buttonHover : null)
          }}
          onMouseEnter={() => buttonHover(true)}
          onMouseLeave={() => buttonHover(false)}
        >
          Enter
        </button>
      </form>
    </div>
  );
};

export default PasswordProtect;
