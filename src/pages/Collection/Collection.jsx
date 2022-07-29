import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { userCollection } from "../../services/mediaService";
import ResultsList from "../../components/ResultsList/ResultsList";
import CollectionDetail from "../../components/CollectionDetail/CollectionDetail";

const Collection = () => {
  let location = useLocation();
  const [type, setType] = useState(location.state.type);
  const [results, setResults] = useState({});
  const [resultsLength, setResultsLength] = useState(null);
  const [selectedResult, setSelectedResult] = useState(null);
  const [selectedIdx, setSelectedIdx] = useState(null);

  const setLocation = () => setType(location.state.type);

  const capType = type.charAt(0).toUpperCase() + type.slice(1);

  async function setCollectionResults(initIdx = 0) {
    await userCollection(type).then((response) => {
      setResults(response);
      setSelectedIdx(initIdx);
      setSelectedResult(response[initIdx]);
      setResultsLength(response.length);
    });
  }

  useEffect(() => {
    setCollectionResults();
  }, [type]);

  useEffect(() => {
    setLocation();
  });

  return (
    <div className="container">
      <h1 className="text-white text-center">{capType} Collection</h1>
      {results.length ? (
        <div className="row">
          <div className="col-12 col-lg-8">
            {selectedResult && (
              <CollectionDetail
                result={selectedResult}
                setCollectionResults={setCollectionResults}
                selectedIdx={selectedIdx}
                lastIdx={resultsLength - 1}
              />
            )}
          </div>
          <hr className="d-lg-none" />
          {/* List Group */}
          <div className="col-12 col-lg-4">
            <ResultsList
              results={results}
              setSelectedResult={setSelectedResult}
              setSelectedIdx={setSelectedIdx}
              selectedIdx={selectedIdx}
            />
          </div>
        </div>
      ) : (
        <div className="row d-flex justify-content-center">
          <div className="col-12 col-md-8">
            <div className="card text-center">
              <div className="card-header fw-bold">
                {capType} Collection is currently empty.
              </div>
              <div className="card-body">
                <h6 className="card-title">Add your favorite {type}.</h6>
                <Link
                  to="/search"
                  className="btn btn-info col-3 col-lg-3"
                  state={{ type: `${type}` }}
                >
                  Search <i className="bi bi-search d-inline" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Collection;
