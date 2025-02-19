import { Link, useLocation } from 'react-router-dom';
const Nav = () => {
  // TODO: Add necessary code to display the navigation bar and link between the pages
   const currentPage = useLocation().pathname;
  return (
    <div className="nav nav-tabs" id = "nav-tab">
      <a className="nav-item">
        <Link
          id="nav-item"
          to="/"
          className={currentPage === '/' ? 'active' : 'nav-link'}>
          Home
        </Link>
      </a>
      <a className="nav-item">
        <Link 
          id="nav-item"
          to="/SavedCandidates"
        className={currentPage === '/SavedCandidates' ? 'active' : 'nav-link'}>
          Saved Candidates
          </Link>
      </a>
    </div>
  )
};

export default Nav;
