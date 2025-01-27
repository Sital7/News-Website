import React from "react";
import "./Card.css";

const Card = ({ data }) => {
  return (
    <div className="cardContainer">
      {data.map((curItem, index) => {
        
        if (!curItem.urlToImage) return null;

        return (
          <div className="card" key={index}>
            <img src={curItem.urlToImage} alt={curItem.title} />
            <div className="content">
              <a
                className="title"
                href={curItem.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {curItem.title}
              </a>
              {/* Fallback for missing descriptions */}
              <p>{curItem.description || "No description available."}</p>
              <button
                onClick={() => window.open(curItem.url, "_blank")}
                className="readMoreButton"
              >
                Read More
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Card;
