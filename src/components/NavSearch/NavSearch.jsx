import { useState } from "react";

const NavSearch = () => {
  const [type, setType] = useState(null);
  
  return (
    <form className="d-flex">
      <div className="input-group">
        <span className="input-group-text" id="basic-addon1">
          <i className="bi bi-book" />
        </span>
        <span className="input-group-text btn btn-dark" id="basic-addon1">
          <i className="bi bi-tv" />
        </span>
        <input
          type="text"
          className="form-control"
          placeholder="Search Titles..."
          aria-label="Search Titles"
          aria-describedby="basic-addon1"
        />
      </div>
    </form>
  );
};

export default NavSearch;
