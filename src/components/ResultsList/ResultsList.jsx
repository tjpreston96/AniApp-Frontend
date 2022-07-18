const ResultsList = ({
  results,
  setSelectedResult,
  selectedResult,
  selectedIdx,
  setSelectedIdx,
}) => {
  const renderedList = results.map((result, idx) => {
    return (
      <div
        key={idx}
        class={
          idx === selectedIdx
            ? "list-group-item list-group-item-action active"
            : "list-group-item list-group-item-action"
        }
        aria-current="true"
        onClick={() => {
          setSelectedResult(result);
          setSelectedIdx(idx);
        }}
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
      </div>
    );
  });

  return <div className="list-group">{renderedList}</div>;
};

export default ResultsList;
