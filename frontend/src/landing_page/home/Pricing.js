import React from 'react';

function Pricing() {
  return (
    <div className="container p-5 mb-5">
      <div className="row">
        <div className="col-4 ">
          <h1 className='fs-4 mb-4'>Unbeatable pricing</h1>
          <p className="text-muted">
            We pioneered the concept of discount broking and price transparency in India.
            Flat fees and no hidden charges.
          </p>
          <a
            href="#"
            style={{ textDecoration: "none" }}
            
          >
            See pricing <i className="fa-solid fa-arrow-right"></i>
          </a>
        </div>

        <div className="col-8 p-4">
          <div className="row text-center ">
            <div className="col-4 d-flex align-items-center justify-content-center">
              <img
                src="media/images/pricing0.svg"
                style={{ width: "120px"}}
                alt="pricing"
              />
              <p className="mb-0  mt-4 text-muted" style={{ fontSize: "12px" }}>
                Free account opening
              </p>
            </div>
            <div className="col-4 d-flex align-items-center justify-content-center">
              <img
                src="media/images/pricing0.svg"
                style={{ width: "120px"}}
                alt="pricing"
              />
              <p className="mb-0 mt-3 text-muted   " style={{ fontSize: "12px"}}>
                Free equity delivery and direct mutual funds
              </p>
            </div>
            <div className="col-4 d-flex align-items-center justify-content-center">
              <img
                src="media/images/pricing20.svg"
                style={{ width: "120px" }}
                alt="pricing"
              />
              <p className="mb-0 mt-3 text-muted" style={{ fontSize: "12px" }}>
                Intraday and F&amp;O
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
