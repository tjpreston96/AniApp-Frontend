const Footer = () => {
  return (
    <footer className="footer bg-dark text-center text-white mt-auto">
      {/* <!-- Grid container --> */}

      <div className="text-center p-3 d-flex flex-column">
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
