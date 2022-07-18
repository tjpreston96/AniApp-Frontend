import { useState } from "react";
import ResultsList from "../../components/ResultsList/ResultsList";
import ResultDetail from "../../components/ResultDetail/ResultDetail";
import SearchBar from "../../components/SearchBar/SearchBar";

const Search = () => {
  const [results, setResults] = useState(null);
  const [selectedResult, setSelectedResult] = useState(null);

  return (
    <div className="container">
      <h3 className="text-center">Search Page</h3>
      <SearchBar setResults={setResults} />
      <br />
      {results ? (
        <div className="row">
          {/* List Group */}
          <div className="col-4">
            <div class="list-group">
              <ResultsList
                results={results}
                setSelectedResult={setSelectedResult}
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
