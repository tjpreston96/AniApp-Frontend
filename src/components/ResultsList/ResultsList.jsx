import { Link } from "react-router-dom";

const ResultsList = ({ results, setSelectedResult }) => {
  const renderedList = results.map((result, idx) => {
    return idx === 0 ? (
      <Link
        key={idx}
        to="#"
        class="list-group-item list-group-item-action active"
        aria-current="true"
        onClick={setSelectedResult(idx)}
      >
        <div class="d-flex w-100 justify-content-between">
          <h5 class="mb-1">{result.attributes.canonicalTitle}</h5>
          <small>
            {result.attributes.ageRating === null
              ? "N/A"
              : result.attributes.ageRating}
          </small>
        </div>
        <p class="mb-1 text-truncate">{result.attributes.description}</p>
        <small>
          {result.type === "anime"
            ? result.attributes.episodeCount + ` episodes`
            : result.attributes.chapterCount + ` chapters`}
        </small>
      </Link>
    ) : (
      <Link
        key={idx}
        to="#"
        class="list-group-item list-group-item-action "
        aria-current="true"
      >
        <div class="d-flex w-100 justify-content-between">
          <h5 class="mb-1 text-truncate">{result.attributes.canonicalTitle}</h5>
          <small>
            {result.attributes.ageRating === null
              ? "N/A"
              : result.attributes.ageRating}
          </small>
        </div>
        <p class="mb-1 text-truncate">{result.attributes.description}</p>
        <small>
          {result.type === "anime"
            ? result.attributes.episodeCount + ` episodes`
            : result.attributes.chapterCount + ` chapters`}
        </small>
      </Link>
    );
  });

  return <div className="list-group">{renderedList}</div>;
};

export default ResultsList;
