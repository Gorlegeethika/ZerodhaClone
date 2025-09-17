import React from "react";

function LeftSection({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
  linkText,
}) {
  return (
    <div className="container mt-5 mb-5 pt-5">
      <div className="row">
        <div className="col-6">
          <img src={imageURL} alt={productName} style={{ marginLeft: "80px" }} />
        </div>

        <div className="col-2"></div>
        <div className="col-4 p-5">
          <h2>{productName}</h2>
          <p className="fs-6" style={{ lineHeight: "1.9" }}>
            {productDescription}
          </p>

          <div>
           {tryDemo && ( // ✅ this will only show if tryDemo has a value
          <a href={tryDemo} style={{ textDecoration: "none" }}>
            {linkText} <i className="fa-solid fa-arrow-right"></i>
          </a>
        )}
            {learnMore && (
              <a href={learnMore} style={{ marginLeft: "50px", textDecoration:"none" }}>
                Learn More <i className="fa-solid fa-arrow-right"></i>
              </a>
            )}
          </div>

          <div className="mt-5 d-flex align-items-center">
            {googlePlay && (
              <a href={googlePlay}>
                <img
                  src="media/images/googlePlayBadge.svg"
                  alt="Google Play"
                  style={{ marginRight: "20px" }}
                />
              </a>
            )}
            {appStore && (
              <a href={appStore}>
                <img src="media/images/appStoreBadge.svg" alt="App Store" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
