import React from 'react';
import News from '../assets/news.png';

const NewsItem = ({ title, description, src, url }) => {
  const safeTitle = title || 'Untitled';
  const safeDesc = description || 'No description available';

  return (
    <div
      className="card bg-dark text-light news-card"
    >
      <img
        src={src ? src : News}
        alt={safeTitle}
        className="card-img-top news-card-image"
      />
      <div className="card-body">
        <h5 className="card-title">{safeTitle.slice(0, 50)}</h5>
        <p className="card-text">{safeDesc.slice(0, 90)}</p>
        <a href={url} target="_blank" rel="noreferrer" className="btn btn-primary">
          Read more
        </a>
      </div>
    </div>
  );
};

export default NewsItem;
