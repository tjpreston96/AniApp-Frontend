const ResultsList = ({
  results,
  setSelectedResult,
  selectedIdx,
  setSelectedIdx,
}) => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleSelection = (result, idx) => {
    setSelectedResult(result);
    setSelectedIdx(idx);
    scrollToTop();
  };

  const renderedList = results.map((result, idx) => {
    return (
      <div
        key={idx}
        className={
          idx === selectedIdx
            ? "list-group-item list-group-item-action list-group-item-dark active"
            : "list-group-item list-group-item-action list-group-item-dark"
        }
        aria-current="true"
        onClick={() => handleSelection(result, idx)}
      >
        <div className="d-flex w-100 justify-content-between">
          <h5 className="mb-1 text-truncate">
            {result.attributes.canonicalTitle}
          </h5>
          <small>
            {result.attributes.ageRating === null
              ? "N/A"
              : result.attributes.ageRating}
          </small>
        </div>
        <p className="mb-1 text-truncate">{result.attributes.description}</p>
        <small>
          {result.type === "anime"
            ? result.attributes.episodeCount + ` episodes`
            : result.attributes.chapterCount + ` chapters`}
        </small>
      </div>
    );
  });

  return <div className="list-group">{renderedList}</div>;
};

export default ResultsList;
