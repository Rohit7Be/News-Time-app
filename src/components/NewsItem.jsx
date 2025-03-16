import React from 'react';

const NewsItem = ({ title, description, imageUrl, newsUrl, author, date, source }) => {
  return (
    <div className="col-md-4 mb-4">
      <div className="card h-100">
        <img
          src={imageUrl || 'https://via.placeholder.com/300x200'} // Fallback image if imageUrl is null
          className="card-img-top"
          alt={title}
        />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <p className="card-text">
            <small className="text-muted">
              By {author || 'Unknown'} on {new Date(date).toLocaleString()}
            </small>
          </p>
          <a href={newsUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;