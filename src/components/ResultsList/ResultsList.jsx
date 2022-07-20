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

  const renderedList = results.map((result, idx) => {
    return (
      <div
        key={idx}
        class={
          idx === selectedIdx
            ? "list-group-item list-group-item-action list-group-item-dark active"
            : "list-group-item list-group-item-action list-group-item-dark"
        }
        aria-current="true"
        onClick={() => {
          setSelectedResult(result);
          setSelectedIdx(idx);
          scrollToTop();
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
