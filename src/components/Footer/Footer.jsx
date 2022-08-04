import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-dark text-center text-white mt-3 position-absolute min-vw-100">
      {/* <!-- Grid container --> */}

      <div
        className="text-center p-3 d-flex flex-column"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        {/* <!-- Section: Social media --> */}
        <div className="d-inline">
          {/* <!-- Google --> */}
          <Link
            className="btn btn-outline-light btn-floating m-1 mb-2"
            to="#!"
            role="button"
            onClick={() => (window.location = "mailto:tpreston96@gmail.com")}
          >
            <i className="fab fa-google"></i>
          </Link>

          {/* <!-- Linkedin --> */}
          <Link
            className="btn btn-outline-light btn-floating m-1 mb-2"
            to="https://www.linkedin.com/in/tylerjpreston/"
            role="button"
          >
            <i className="fab fa-linkedin-in"></i>
          </Link>

          {/* <!-- Github --> */}
          <a
            className="btn btn-outline-light btn-floating m-1 mb-2"
            href="https://github.com/tjpreston96"
            role="button"
          >
            <i className="fab fa-github"></i>
          </a>
        </div>

        {/* <!-- Copyright --> */}
        <div className="d-inline">
          © 2022 Copyright:{" "}
          <Link className="text-white" to="https://github.com/tjpreston96">
            Tyler Preston
          </Link>
        </div>
      </div>
      {/* <!-- Copyright --> */}
    </footer>
  );
};

export default Footer;
