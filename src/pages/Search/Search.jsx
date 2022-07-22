import { useState } from "react";
import ResultsList from "../../components/ResultsList/ResultsList";
import ResultDetail from "../../components/ResultDetail/ResultDetail";
import SearchBar from "../../components/SearchBar/SearchBar";

const Search = () => {
  const [results, setResults] = useState(null);
  const [selectedResult, setSelectedResult] = useState(null);
  const [selectedIdx, setSelectedIdx] = useState(null);
  // const [collection, setCollection] = useState([]);

  // const handleSetCollection = () => {

  // };

  return (
    <div className="container">
      <h1 className="text-center text-white">Search Page</h1>
      <SearchBar
        setResults={setResults}
        setSelectedIdx={setSelectedIdx}
        setSelectedResult={setSelectedResult}
      />
      <hr />
      {results && (
        <div className="row">
          <div className="col-12 col-lg-8">
            {selectedResult ? <ResultDetail result={selectedResult} /> : null}
          </div>
          <hr className="d-lg-none" />
          {/* List Group */}
          <div className="col-12 col-lg-4">
            <div className="list-group">
              <ResultsList
                results={results}
                setSelectedResult={setSelectedResult}
                setSelectedIdx={setSelectedIdx}
                selectedIdx={selectedIdx}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Search;
