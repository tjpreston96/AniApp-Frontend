import { Link } from "react-router-dom";
import NavSearch from "../NavSearch/NavSearch";

const NavBar = ({ user, handleLogout }) => {
  return (
    <>
      {user ? (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
          <div className="container-fluid">
            <Link to="/" className="navbar-brand">
              AniApp
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                {/* <li className="nav-item ">Welcome, {user.name}</li> */}

                <li className="nav-item dropdown">
                  <Link
                    className="nav-link dropdown-toggle"
                    to="#"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Anime
                  </Link>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <li>
                      <Link className="dropdown-item" to="#">
                        Collection
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="#">
                        Search
                      </Link>
                    </li>
                  </ul>
                </li>

                <li className="nav-item dropdown">
                  <Link
                    className="nav-link dropdown-toggle"
                    to="#"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Manga
                  </Link>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <li>
                      <Link className="dropdown-item" to="#">
                        Collection
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="#">
                        Search
                      </Link>
                    </li>
                  </ul>
                </li>

                <li className="nav-item dropdown">
                  <Link
                    className="nav-link dropdown-toggle"
                    to="#"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Accounts
                  </Link>
                  <ul
                    className="dropdown-menu "
                    aria-labelledby="navbarDropdown"
                  >
                    <li className="dropdown-item">
                      <Link to="/profiles">Profiles</Link>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>

                    <li className="dropdown-item">
                      <Link to="/changePassword">Change Password</Link>
                    </li>
                    <li className="dropdown-item">
                      <Link to="" onClick={handleLogout}>
                        LOG OUT
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
              <NavSearch />
            </div>
          </div>
        </nav>
      ) : (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
          <div className="container-fluid">
            <Link to="/" className="navbar-brand">
              AniApp
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
                
                <li className="nav-item dropdown">
                  <Link
                    className="nav-link dropdown-toggle"
                    to="#"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Accounts
                  </Link>
                  <ul
                    className="dropdown-menu "
                    aria-labelledby="navbarDropdown"
                  >
                    <li className="dropdown-item">
                      <Link to="/login">Log In</Link>
                    </li>
                    <li className="dropdown-item">
                      <Link to="/signup">Sign Up</Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      )}
    </>
  );
};

export default NavBar;
