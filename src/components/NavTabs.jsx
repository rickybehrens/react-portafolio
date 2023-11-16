import { Link, useLocation } from 'react-router-dom';

// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function NavTabs() {
  const currentPage = useLocation().pathname;

  return (
    <>
    <div className="header">
      <div className="logo">Ricardo Behrens</div>
      <div className="nav-links">
        <ul className="nav nav-tabs">
          <li className="nav-item">
            <Link
              to="/"
              // This is a conditional (ternary) operator that checks to see if the current page is "Home"
              // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
              className={currentPage === '/' ? 'nav-link active' : 'nav-link'}
            >
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/About"
              // Check to see if the currentPage is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
              className={currentPage === '/About' ? 'nav-link active' : 'nav-link'}
            >
              About Me
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/Portafolio"
              // Check to see if the currentPage is `Portafolio`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
              className={currentPage === '/Portafolio' ? 'nav-link active' : 'nav-link'}
            >
              Portafolio
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/Contact"
              // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
              className={currentPage === '/Contact' ? 'nav-link active' : 'nav-link'}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </div>

    <div className="footer">
        <div className="logo-container">
          <a href="https://github.com/rickybehrens" target="_blank" rel="noopener noreferrer">
            <img src="/github-mark.png" alt="GitHub" />
          </a>
          <a href="https://www.linkedin.com/in/ricardo-behrens/" target="_blank" rel="noopener noreferrer">
            <img src="/61109.png" alt="LinkedIn" />
          </a>
          <a href="https://stackoverflow.com/users/22924033/rickybehrens" target="_blank" rel="noopener noreferrer">
            <img src="/stack-overflow.png" alt="stack overflow" />
          </a>
          
          {/* ... Other div links ... */}
        </div>
      </div>
    </>
  );
}

export default NavTabs;