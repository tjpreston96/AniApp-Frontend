import React, { useEffect, useState } from "react";
import { getCollection } from "../../services/mediaService";

const Carousel = ({ type, collection }) => {
  const [items, setItems] = useState([]);
  let id = `${type}Carousel`;
  let idSelector = `#${type}Carousel`;

  useEffect(() => {
    const dataRetrieval = async () => {
      const data = await getCollection(type, collection);
      setItems(data);
    };
    dataRetrieval();
  }, [type, collection]);

  const itemsMap = items?.map((item, idx) => {
    // console.log(item.attributes.posterImage.medium);
    return idx === 0 ? (
      <div key={idx} className="carousel-item active" data-bs-interval="5000">
        <img
          src={item.attributes.posterImage.large}
          className="d-block w-100"
          alt="..."
        />
        <div className="carousel-caption">
          <h5>{item.attributes.titles.en}</h5>
          <p className="d-inline-block text-truncate">
            {item.attributes.averageRating}
          </p>
        </div>
      </div>
    ) : (
      <div key={idx} className="carousel-item" data-bs-interval="5000">
        <img
          src={item.attributes.posterImage.large}
          className="d-block w-100"
          alt="..."
        />
        <div className="carousel-caption">
          <h5>{item.attributes.canonicalTitle}</h5>
          <p className="d-inline-block text-truncate">
            {item.attributes.averageRating}
          </p>
        </div>
      </div>
    );
  });

  return (
    <div
      id={id}
      className="carousel slide carousel-fade"
      data-bs-ride="carousel"
    >
      {/* Indicators */}
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target={idSelector}
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target={idSelector}
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target={idSelector}
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>

      {/* Carousel Items */}
      <div className="carousel-inner">{itemsMap}</div>

      {/* Previous */}
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target={idSelector}
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>

      {/* Next */}
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target={idSelector}
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Carousel;
