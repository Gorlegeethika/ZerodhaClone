import React from 'react';
import ecoSystem from '../media/images/ecoSystem.png'; // ✅ Correct import

function Stats() {
  return (
    <div className="container p-3">
      <div className="row">
        <div className="col-6 p-5">
          {/* Text content */}
        </div>
        <div className="col-6 p-5">
          <img src={ecoSystem} style={{ width: "120%" }} alt="ecosystem" />
          <div className="mt-2">
            <a href="#" style={{ textDecoration: "none" }} className="mx-5">
              Explore our products <i className="fa-solid fa-arrow-right"></i>
            </a>
            <a href="#" style={{ textDecoration: "none" }}>
              Try Kite demo <i className="fa-solid fa-arrow-right"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stats;
