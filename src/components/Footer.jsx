import React from 'react';

function Footer() {
  return (
    <footer className="footer">
      <div className="logo-container">
        <a href="https://github.com/rickybehrens" target="_blank" rel="noopener noreferrer">
          <img src="/github-mark.png" alt="GitHub" />
        </a>
        <a href="https://www.linkedin.com/in/ricardo-behrens/" target="_blank" rel="noopener noreferrer">
          <img src="/linkedin.png" alt="LinkedIn" />
        </a>
        <a href="https://stackoverflow.com/users/22924033/rickybehrens" target="_blank" rel="noopener noreferrer">
          <img src="/stack-overflow.png" alt="stack overflow" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
