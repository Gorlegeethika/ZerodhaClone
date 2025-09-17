import React from 'react';

function RightSection({ imageURL, productName, productDescription, learnMore, linkText }) {
  return (
    <div className="container mt-5 pt-5">
      <div className="row align-items-center">
        <div className="col-4 p-4">
          <h2>{productName}</h2>
          <p className="mt-4" style={{ fontSize: "1.0rem", lineHeight: "1.9" }}>
            {productDescription}
          </p>
          {learnMore && (
            <div>
              <a href={learnMore} style={{ textDecoration: "none" }}>
                {linkText} <i className="fa-solid fa-arrow-right"></i>
              </a>
            </div>
          )}
        </div>
        <div className="col-1"></div>
        <div className="col-6 text-center">
          <img 
            src={imageURL} 
            alt={productName} 
            className="img-fluid" 
            style={{ maxWidth: "115%", height: "auto" }} 
          />
        </div>
      </div>
    </div>
  );
}

export default RightSection;
