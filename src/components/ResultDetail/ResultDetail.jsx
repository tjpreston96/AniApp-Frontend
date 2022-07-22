import { useState } from "react";
import styles from "./ResultDetail.module.css";
import { add } from "../../services/mediaService";

const ResultDetail = ({ result }) => {
  const [showMore, setShowMore] = useState(false);

  function handleMoreClick() {
    setShowMore(!showMore);
  }

  return (
    <div className="card text-white bg-dark">
      <h3 className="card-title text-center">
        {result.attributes.canonicalTitle}
      </h3>

      {result.type === "anime" ? (
        <iframe
          title="trailer"
          className={styles.ytPlayer + " card-img-top rounded"}
          src={`https://www.youtube.com/embed/${result.attributes.youtubeVideoId}`}
          frameBorder="0"
          allowFullScreen
        />
      ) : (
        <img
          src={result.attributes.posterImage.large}
          className={styles.posterImage + " card-img-top rounded"}
          alt="card-img"
          style={{ maxHeight: "30rem" }}
        />
      )}
      <div className="card-body"></div>
      <div className="card-footer d-grid gap-2 ">
        <button className="btn btn-lg btn-info" onClick={handleMoreClick}>
          {showMore ? "Show Less" : "Show More"}
        </button>
        <button
          className="btn btn-lg btn-secondary"
          onClick={() => add(result.type, result.id)}
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default ResultDetail;
