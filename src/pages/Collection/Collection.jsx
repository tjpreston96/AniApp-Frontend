import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { userCollection } from "../../services/mediaService";

const Collection = () => {
  let location = useLocation();
  const [type, setType] = useState(location.state.type);
  const [results, setResults] = useState(null);
  //   const [selectedResult, setSelectedResult] = useState(null);
  //   const [selectedIdx, setSelectedIdx] = useState(null);

  const setLocation = () => setType(location.state.type);

  async function setCollectionResults() {
    setResults(await userCollection(type));
  }

  useEffect(() => {
    setCollectionResults()
  }, [type]);

  useEffect(() => {
    setLocation();
  });

  return (
    <h1 className="text-white text-center">
      {type.charAt(0).toUpperCase() + type.slice(1)} Collection
    </h1>
  );
};

export default Collection;
