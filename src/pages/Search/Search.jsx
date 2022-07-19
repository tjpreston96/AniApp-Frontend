import { useState } from "react";
import ResultsList from "../../components/ResultsList/ResultsList";
import ResultDetail from "../../components/ResultDetail/ResultDetail";
import SearchBar from "../../components/SearchBar/SearchBar";

const Search = () => {
  const [results, setResults] = useState(null);
  const [selectedResult, setSelectedResult] = useState(null);
  const [selectedIdx, setSelectedIdx] = useState(null);

  return (
    <div className="container">
      <h1 className="text-center">Search Page</h1>
      <SearchBar
        setResults={setResults}
        setSelectedIdx={setSelectedIdx}
        setSelectedResult={setSelectedResult}
      />
      <br />
      {results ? (
        <div className="row">
          <div className="col-sm-12 col-md-8">
            {selectedResult ? <ResultDetail result={selectedResult} /> : null}
          </div>
          <hr className="d-md-none" />
          {/* List Group */}
          <div className="col-sm-12 col-md-4">
            <div class="list-group">
              <ResultsList
                results={results}
                setSelectedResult={setSelectedResult}
                setSelectedIdx={setSelectedIdx}
                selectedIdx={selectedIdx}
              />
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Search;
