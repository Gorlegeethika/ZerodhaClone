import React from "react";
import {Link} from "react-router-dom";

function Universe() {
  return (
    <div className="container mt-5 p-5">
      <div className="text-center p-5">
        <h2 className="text-muted mb-4">The Zerodha Universe</h2>
        <p className="mb-3 ">
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
      </div>

      <div className="row text-center">
        <div className="col-4 p-3 mt-3">
          <img
            src="media/images/zerodhaFundhouse.png"
            style={{ width: "60%" }}
            alt="smallcase"
          />
          <p className="text-muted small mt-3">
            Our asset management venture <br />
            that is creating simple and transparent index <br />
            funds to help you save for your goals.
          </p>
        </div>
        <div className="col-4 p-3 mt-4">
          <img
            src="media/images/sensibullLogo.svg"
            style={{ width: "70%" }}
            alt="smallcase"
          />
          <p className="text-muted small mt-4">
            Options trading platfform that lts you
            <br />
            create strategies,analyze positions,and examine
            <br />
            data points like open interest,FII/DII, and more.
          </p>
        </div>
        <div className="col-4 p-3 mt-3">
          <img
            src="media/images/tijori.svg"
            style={{ width: "40%" }}
            alt="smallcase"
          />
          <p className="text-muted small mt-3">
            Investment research platform
            <br />
            that offers detailed insights on stocks,
            <br />
            sectors,supply chains,and more.
          </p>
        </div>
      </div>

      <div className="row text-center">
        <div className="col-4 p-3 mt-3">
          <img
            src="media/images/streakLogo.png"
            style={{ width: "50%" }}
            alt="smallcase"
          />
          <p className="text-muted small mt-3">
            Systematic trading platform
            <br />
            that allows you to create and backtest<br/> strategies without coding.
            <br />
          </p>
        </div>
        <div className="col-4 p-3 mt-3">
          <img src="media/images/smallcaseLogo.png" alt="smallcase" />
          <p className="text-muted small mt-3">
            Thematic investing platform <br />
            that helps you invest in diversified <br />
            baskets of stocks on ETFs.
          </p>
        </div>
        <div className="col-4 p-3 mt-3">
          <img
            src="media/images/dittoLogo.png"
            style={{ width: "40%" }}
            alt="smallcase"
          />
          <p className="text-muted small mt-3">
            Personalized advice on life <br /> and health insurance.No spam
            <br /> and no mis-selling.
          </p>
        </div>
      </div>

      <div className="text-center my-5">
        <Link to="/signup"><button className="btn btn-primary p-2 fs-5 custom-btn" style={{ width: "20%"}}>
          Sign up for free
        </button>
        </Link>
      </div>
    </div>
  );
}

export default Universe;
