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
      <div className="card-body">
        <p className="card-text">
          <b>Description:</b> {result.attributes.description}
        </p>
        {showMore && (
          <>
            <p className="card-text">
              <b>Start:</b> {result.attributes.startDate}
            </p>
            <p className="card-text">
              <b>Finish:</b>{" "}
              {result.attributes.endDate ? result.attributes.endDate : "N/A"}
            </p>
            <p className="card-text">
              <b>Status:</b>{" "}
              {result.attributes.status.charAt(0).toUpperCase() +
                result.attributes.status.slice(1)}
            </p>
            <p className="card-text">
              <b>Rating:</b>{" "}
              {result.attributes.averageRating
                ? result.attributes.averageRating
                : "N/A"}
            </p>
          </>
        )}
      </div>
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
