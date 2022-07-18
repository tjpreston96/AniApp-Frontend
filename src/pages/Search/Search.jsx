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
      <h3 className="text-center">Search Page</h3>
      <SearchBar
        setResults={setResults}
        setSelectedIdx={setSelectedIdx}
        setSelectedResult={setSelectedResult}
      />
      <br />
      {results ? (
        <div className="row">
          {/* List Group */}
          <div className="col-4">
            <div class="list-group">
              <ResultsList
                results={results}
                setSelectedResult={setSelectedResult}
                selectedResult={selectedResult}
                setSelectedIdx={setSelectedIdx}
                selectedIdx={selectedIdx}
              />
            </div>
          </div>
          <div className="col-8">
            {selectedResult ? <ResultDetail result={selectedResult} /> : null}
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Search;
