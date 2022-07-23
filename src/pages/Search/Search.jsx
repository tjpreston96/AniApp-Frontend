import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import ResultsList from "../../components/ResultsList/ResultsList";
import ResultDetail from "../../components/ResultDetail/ResultDetail";
import SearchBar from "../../components/SearchBar/SearchBar";
import { userCollection } from "../../services/mediaService";

const Search = () => {
  let location = useLocation();
  const [type, setType] = useState(
    location.state.type ? location.state.type : "anime"
  );
  const [results, setResults] = useState(null);
  const [selectedResult, setSelectedResult] = useState(null);
  const [selectedIdx, setSelectedIdx] = useState(null);
  const [mangaCollection, setMangaCollection] = useState(null);
  const [animeCollection, setAnimeCollection] = useState(null);

  async function setCollections() {
    setMangaCollection(await userCollection("manga"));
    setAnimeCollection(await userCollection("anime"));
  }

  useEffect(() => {
    setCollections();
  }, []);

  return (
    <div className="container">
      <h1 className="text-center text-white">Search Page</h1>
      <SearchBar
        setResults={setResults}
        setSelectedIdx={setSelectedIdx}
        setSelectedResult={setSelectedResult}
        type={type}
        setType={setType}
      />
      <hr />
      {results && (
        <div className="row">
          <div className="col-12 col-lg-8">
            {selectedResult ? (
              <ResultDetail
                result={selectedResult}
                animeCollection={animeCollection}
                mangaCollection={mangaCollection}
                setCollections={setCollections}
              />
            ) : null}
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
      )}
    </div>
  );
};

export default Search;
