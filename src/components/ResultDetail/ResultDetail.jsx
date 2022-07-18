import React from "react";

const ResultDetail = ({ result }) => {
  return (
    <div className="card">
      {result.type === "anime" ? (
        <iframe
          title="trailer"
          className="ytPlayer"
          src={`https://www.youtube.com/embed/${result.attributes.youtubeVideoId}`}
          frameBorder="0"
          allowFullScreen
        />
      ) : (
        <img
          src={result.attributes.posterImage.large}
          className="card-img-top"
          alt="card"
        />
      )}
    </div>
  );
};

export default ResultDetail;
