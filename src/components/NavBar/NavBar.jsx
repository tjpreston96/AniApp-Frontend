import { Link } from "react-router-dom";
// import SearchBar from "../SearchBar/SearchBar";

const NavBar = ({ user, handleLogout }) => {
  return (
    <header>
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

                {/* Anime Dropdown */}
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
                    className="dropdown-menu dropdown-menu-dark"
                    aria-labelledby="navbarDropdown"
                  >
                    <li>
                      <Link
                        className="dropdown-item"
                        to="/collection/anime"
                        state={{ type: "anime" }}
                      >
                        Collection
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item"
                        to="/search"
                        state={{ type: "anime" }}
                      >
                        Search
                      </Link>
                    </li>
                  </ul>
                </li>

                {/* Manga Dropdown */}
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
                    className="dropdown-menu dropdown-menu-dark"
                    aria-labelledby="navbarDropdown"
                  >
                    <li>
                      <Link
                        className="dropdown-item"
                        to="/collection/manga"
                        state={{ type: "manga" }}
                      >
                        Collection
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item"
                        to="/search"
                        state={{ type: "manga" }}
                      >
                        Search
                      </Link>
                    </li>
                  </ul>
                </li>

                {/* Accounts Dropdown */}
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
                    className="dropdown-menu dropdown-menu-dark"
                    aria-labelledby="navbarDropdown"
                  >
                    <li>
                      <Link to="/profiles" className="dropdown-item">
                        Profiles
                      </Link>
                    </li>

                    <li>
                      <hr className="dropdown-divider" />
                    </li>

                    <li>
                      <Link to="/changePassword" className="dropdown-item">
                        Change Password
                      </Link>
                    </li>

                    <li>
                      <Link
                        to=""
                        className="dropdown-item"
                        onClick={handleLogout}
                      >
                        Log Out ({user.name})
                      </Link>
                    </li>
                  </ul>
                </li>
                {/* <li>
                  <SearchBar />
                </li> */}
              </ul>
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
                    className="dropdown-menu dropdown-menu-dark"
                    aria-labelledby="navbarDropdown"
                  >
                    <li>
                      <Link to="/login" className="dropdown-item">
                        Log In
                      </Link>
                    </li>
                    <li>
                      <Link to="/signup" className="dropdown-item">
                        Sign Up
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
};

export default NavBar;
