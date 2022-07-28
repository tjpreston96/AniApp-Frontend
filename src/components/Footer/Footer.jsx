import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
      <div class="col-md-4 d-flex align-items-center">
        <Link
          to="/"
          class="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1"
        ></Link>
        <span class="text-muted">Created by Tyler Preston</span>
      </div>

      <ul class="nav col-md-4 justify-content-end list-unstyled d-flex">
        <li class="ms-3">
          <Link class="text-muted" to="!#">
            <i class="bi bi-linkedin"></i>
          </Link>
        </li>
        <li class="ms-3">
          <Link class="text-muted" to="!#">
            <i class="bi bi-github"></i>
          </Link>
        </li>
        <li class="ms-3">
          <Link class="text-muted" to="!#">
            <svg class="bi" width="24" height="24"></svg>
          </Link>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
