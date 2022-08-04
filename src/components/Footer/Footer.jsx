import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-dark text-center text-white mt-3 position-absolute bottom-0 min-vw-100">
      {/* <!-- Grid container --> */}

      <div
        className="text-center p-3 d-flex flex-column"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        {/* <!-- Section: Social media --> */}
        <div className="d-inline">
          {/* <!-- Google --> */}
          <a
            className="btn btn-outline-light btn-floating m-1 mb-2"
            href="mailto:tpreston96@gmail.com"
            role="button"
          >
            <i className="fab fa-google"></i>
          </a>

          {/* <!-- Linkedin --> */}
          <a
            className="btn btn-outline-light btn-floating m-1 mb-2"
            href="https://www.linkedin.com/in/tylerjpreston/"
            role="button"
          >
            <i className="fab fa-linkedin-in"></i>
          </a>

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
          <a className="text-white" href="https://github.com/tjpreston96">
            Tyler Preston
          </a>
        </div>
      </div>
      {/* <!-- Copyright --> */}
    </footer>
  );
};

export default Footer;
