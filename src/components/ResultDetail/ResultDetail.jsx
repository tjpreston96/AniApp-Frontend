import React from "react";
import styles from "./ResultDetail.module.css";

const ResultDetail = ({ result }) => {
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
        <div className="card-text">{result.attributes.description}</div>
      </div>
      <div class="card-footer d-grid gap-2 ">
        <button className="btn btn-lg btn-info " disabled>
          Show More
        </button>
        <button className="btn btn-lg btn-secondary">Add</button>
      </div>
    </div>
  );
};

export default ResultDetail;
