import { useState } from "react";
import { search } from "../../services/mediaService";

const SearchBar = ({ setResults, setSelectedIdx, setSelectedResult }) => {
  const [type, setType] = useState("anime");
  const [title, setTitle] = useState("");

  const onInputChange = (e) => setTitle(e.target.value);

  const onSubmit = (e) => {
    e.preventDefault();
    search(type, title).then((response) => {
      setResults(response);
      setSelectedIdx(0);
      setSelectedResult(response[0]);
    });
  };

  return (
    <form onSubmit={onSubmit} className="d-flex">
      <div className="input-group">
        <span
          className={
            type === "anime"
              ? "input-group-text btn btn-dark"
              : "input-group-text btn btn-secondary"
          }
          id="basic-addon2 "
          onClick={() => setType("anime")}
        >
          <i className="bi bi-tv d-inline" />
          <p className="d-none d-md-inline">&nbsp; Anime</p>
        </span>

        <span
          className={
            type === "manga"
              ? "input-group-text btn btn-dark"
              : "input-group-text btn btn-secondary"
          }
          id="basic-addon1"
          onClick={() => setType("manga")}
        >
          <i className="bi bi-book d-inline" />
          <p className="d-none d-md-inline">&nbsp; Manga</p>
        </span>

        <input
          type="text"
          className="form-control"
          placeholder="Search Titles..."
          aria-label="Search Titles"
          aria-describedby="basic-addon1"
          value={title}
          onChange={onInputChange}
        />

        <button className="btn btn-secondary" type="submit">
          Search
        </button>
      </div>
    </form>
  );
};

export default SearchBar;