import React from 'react';
import News from '../assets/news.png';

const NewsItem = ({ title, description, src, url }) => {
  const safeTitle = title || 'Untitled';
  const safeDesc = description || 'No description available';

  return (
    <div
      className="card bg-dark text-light mb-3 d-inline-block my-3 mx-3 px-2 py-2"
      style={{ maxWidth: '410px' }}
    >
      <img
        src={src ? src : News}
        alt={safeTitle}
        style={{ height: '225px', width: '320px' }}
        className="card-img-top"
      />
      <div className="card-body">
        <h5 className="card-title">{safeTitle.slice(0, 50)}</h5>
        <p className="card-text">{safeDesc.slice(0, 90)}</p>
        <a href={url} target="_blank"  className="btn btn-primary">
          Read more
        </a>
      </div>
    </div>
  );
};

export default NewsItem;
