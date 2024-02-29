import React from "react";

const NewsItem = (props) => {
    let { title, description, imageUrl, newsUrl, author, date, source } = props;
    return (
      <div className="my-3">
        <div className="card">
          <img
            src={
              !imageUrl
                ? "https://png.pngtree.com/png-vector/20221117/ourmid/pngtree-breaking-news-vector-icon-illustration-logo-design-png-image_6461447.png"
                : imageUrl
            }
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">
              {title}
              <span className="position-absolute top-0 translate-middle badge rounded-pill bg-dark" style={{left: '50%', zIndex:'1'}}>{source}</span>
            </h5>
            <p className="card-text">{description}</p>
            <p className="card-text">
              <small className="text-body-secondary">
                By {author ? author : " Uknown "} on{" "}
                {new Date(date).toGMTString()}
              </small>
            </p>
            <a
              rel="norederrer"
              href={newsUrl}
              target="_blank"
              className="btn btn-sm btn-dark"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
}

export default NewsItem;
