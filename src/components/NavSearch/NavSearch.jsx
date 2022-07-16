import { useState } from "react";

const NavSearch = () => {
  const [type, setType] = useState("anime");

  return (
    <form className="d-flex">
      <div className="input-group">
        <span
          className={
            type === "anime"
              ? "input-group-text btn btn-secondary"
              : "input-group-text"
          }
          id="basic-addon2 "
          onClick={() => setType("anime")}
        >
          <i className="bi bi-tv" />
        </span>

        <span
          className={
            type === "manga"
              ? "input-group-text btn btn-secondary"
              : "input-group-text"
          }
          id="basic-addon1"
          onClick={() => setType("manga")}
        >
          <i className="bi bi-book" />
        </span>
        
        <input
          type="text"
          className="form-control"
          placeholder="Search Titles..."
          aria-label="Search Titles"
          aria-describedby="basic-addon1"
        />

        <button className="btn btn-secondary" type="submit">
          Search
        </button>
      </div>
    </form>
  );
};

export default NavSearch;
