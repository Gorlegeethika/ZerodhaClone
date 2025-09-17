import React from "react";
function Brokerage() {
  return (
    <div className="container mb-5 mt-5 p-2">
      <div className="row text-center mb-5">
        <div className="col-4">
          <img
            src=" media/images/pricing0.svg"
            style={{ width: "70%" }}
            className="mb-4"
          ></img>
          <h2>Free equity delivery</h2>
          <p className="text-muted mt-4">
            All equity delivery investments (NSE, BSE),
            <br />
            are absolutely free — ₹ 0 brokerage.
          </p>
        </div>
        <div className="col-4">
          <img
            src="media/images/pricing20.svg"
            style={{ width: "70%" }}
            className="mb-4"
          ></img>
          <h2>Intraday and F&O trades</h2>
          <p className="text-muted mt-4">
            Flat ₹ 20 or 0.03% (whichever is lower) per <br />
            executed order on intraday trades across <br /> equity, currency,
            and commodity trades.Flat
            <br /> ₹20 on all option trades.
          </p>
        </div>
        <div className="col-4">
          <img
            src="media/images/pricing0.svg"
            style={{ width: "70%" }}
            className="mb-4"
          ></img>
          <h2>Free direct MF</h2>
          <p className="text-muted mt-4">
            All direct mutual fund investments are
            <br />
            absolutely free — ₹ 0 commissions & DP
            <br /> charges.
          </p>
        </div>
      </div>
      <div className=" row p-2">
        <h2>Charges explained</h2>
        <div
          className="col-6 text-muted"
          style={{ fontSize: "13px", lineHeight: "1.9" }}
        >
          <h6 className="mt-5">Securities/Commodities transaction tax</h6>
          <p>
            Tax by the government when transacting on the exchanges. Charged as
            above on both buy
            <br /> and sell sides when trading equity delivery. Charged only on
            selling side when trading
            <br /> intraday or on F&O.
            <p className="mt-4">
              {" "}
              When trading at Zerodha, STT/CTT can be a lot more than the
              brokerage we charge. Important to keep a tab.
            </p>
          </p>
          <h6 className="mt-2"> Transaction/Turnover Charges</h6>
          <p>
            Charged by exchanges (NSE, BSE, MCX) on the value of your
            transactions.
          </p>
          <p>
            BSE has revised transaction charges in XC, XD, XT, Z and ZP groups
            to ₹10,000 per crore w.e.f 01.01.2016. (XC and XD groups have been
            merged into a new group X w.e.f 01.12.2017)
            <br />
            BSE has revised transaction charges in SS and ST groups to ₹1,00,000
            per crore of gross turnover.
            <br />
            BSE has revised transaction charges for group A, B and other non
            exclusive scrips (non-exclusive scrips from group E, F, FC, G, GC,
            W, T) at ₹375 per crore of turnover on flat rate basis w.e.f.
            December 1, 2022.
            <br />
            BSE has revised transaction charges in M, MT, TS and MS groups to
            ₹275 per crore of gross turnover.
          </p>
          <h6 className="mt-2">Call & trade</h6>
          <p>
            Additional charges of ₹50 per order for orders placed through a
            dealer at Zerodha including auto
            <br /> square off orders.
          </p>
          <h6 className="mt-2">Stamp charges</h6>
          <p>
            Stamp charges by the Government of India as per the Indian Stamp Act
            of 1899 for transacting in
            <br /> instruments on the stock exchanges and depositories.
          </p>
          <h6 className="mt-2">NRI brokerage charges</h6>
          <ul>
            <li>
              <p>₹100 per order for futures and options.</p>
            </li>
            <li>
              <p>
                For a non-PIS account, 0.5% or ₹100 per executed order for
                equity (whichever is lower).
              </p>
            </li>
            <li>
              <p>
                For a PIS account, 0.5% or ₹200 per executed order for equity
                (whichever is lower).
              </p>
            </li>
            <li>
              <p>
                ₹500 + GST as yearly account maintenance charges (AMC) charges.
              </p>
            </li>
          </ul>
          <h6 className="mt-2">Account with debit balance</h6>
          <p>
            If the account is in debit balance, any order placed will be charged
            ₹40 per executed order instead of
            <br /> ₹20 per executed order.
          </p>
          <h6 className="mt-2">
            Charges for Investor's Protection Fund Trust (IPFT) by NSE
          </h6>
          <ul>
            <li>
              <p>
                Equity and Futures - ₹10 per crore + GST of the traded value.
              </p>
            </li>
            <li>
              <p>Options - ₹50 per crore + GST traded value (premium value)</p>
            </li>
            <li>
              <p>
                Currency - ₹0.05 per lakh + GST of turnover for Futures and ₹2
                per lakh + GST of premium for
                <br /> Options.
              </p>
            </li>
          </ul>
          <h6 className="mt-2">Margin Trading Facility (MTF)</h6>
          <ul>
            <li>
              <p>
                MTF Interest: 0.04% per day (₹40 per lakh) on the funded amount.
                The interest is applied from T+1 day until the day MTF stocks
                are sold.
              </p>
            </li>
            <li>
              <p>
                MTF Brokerage: 0.3% or Rs. 20/executed order, whichever is
                lower.
              </p>
            </li>
            <li>
              <p>
                MTF pledge charge: ₹15 + GST per pledge and unpledge request per
                ISIN.
              </p>
            </li>
          </ul>
        </div>
        <div
          className="col-6  text-muted"
          style={{ fontSize: "13px", lineHeight: "1.9" }}
        >
          <h6 className="mt-5">GST</h6>
          <p>
            Tax levied by the government on the services rendered. 18% of (
            brokerage + SEBI charges <br />+ transaction charges)
          </p>
          <h6 className="mt-2">SEBI Charges</h6>
          <p>
            Charged at ₹10 per crore + GST by Securities and Exchange Board of
            India for regulating the
            <br /> markets.
          </p>
          <h6 className="mt-2">DP (Depository participant) charges</h6>
          <p>
            ₹15.34 per scrip (₹3.5 CDSL fee + ₹9.5 Zerodha fee + ₹2.34 GST) is
            charged on the trading account <br />
            ledger when stocks are sold, irrespective of quantity.
          </p>
          <p>
            Female demat account holders (as first holder) will enjoy a discount
            of ₹0.25 per transaction on the
            <br /> CDSL fee.
          </p>
          <p>
            Debit transactions of mutual funds & bonds get an additional
            discount of ₹0.25 on the CDSL fee.
          </p>
          <h6 className="mt-2">Pledging charges</h6>
          <p>₹30 + GST per pledge request per ISIN.</p>
          <h6 className="mt-2">AMC (Account maintenance charges)</h6>
          <p>
            For BSDA demat account: Zero charges if the holding value is less
            than ₹4,00,000. To learn more about
            <br /> BSDA, Click here
          </p>
          <p>
            For non-BSDA demat accounts: ₹300/year + 18% GST charged quarterly
            (90 days). To learn more
            <br /> about AMC, Click here
          </p>
          <h6 className="mt-2">Corporate action order charges</h6>
          <p>
            ₹20 plus GST will be charged for OFS / buyback / takeover /
            delisting orders placed through Console.
          </p>
          <h6 className="mt-2">Off-market transfer charges</h6>
          <p></p>
          <h6 className="mt-2"></h6>
          <p>₹25 per transaction.</p>
          <h6 className="mt-2">Physical CMR request</h6>
          <p>
            First CMR request is free. ₹20 + ₹100 (courier charge) + 18% GST for
            subsequent requests.
          </p>
          <h6 className="mt-2">Payment gateway charges</h6>
          <p></p>
          <h6 className="mt-2"></h6>
          <p>₹9 + GST (Not levied on transfers done via UPI)</p>
          <h6 className="mt-2">Delayed Payment Charges</h6>
          <p>
            Interest is levied at 18% a year or 0.05% per day on the debit
            balance in your trading account. Learn more.
          </p>
          <h6 className="mt-2">
            Trading using 3-in-1 account with block functionality
          </h6>
          <ul>
            <li>
              <p>Delivery & MTF Brokerage: 0.5% per executed order.</p>
            </li>
            <li>
              <p>Intraday Brokerage: 0.05% per executed order.</p>
            </li>
          </ul>
        </div>
        <h6 className="text-muted mt-3">Disclaimer</h6>
        <p
          className="text-muted mt-3"
          style={{ fontSize: "13px", lineHeight: "1.9" }}
        >
          For Delivery based trades, a minimum of ₹0.01 will be charged per
          contract note. Clients who opt to receive physical contract notes will
          be charged ₹20 per contract note plus courier charges.
          <br /> Brokerage will not exceed the rates specified by SEBI and the
          exchanges. All statutory and regulatory charges will be levied at
          actuals. Brokerage is also charged on expired, exercised, and
          <br /> assigned options contracts. Free investments are available only
          for our retail individual clients. Companies, Partnerships, Trusts,
          and HUFs need to pay 0.1% or ₹20 (whichever is less) as delivery
          <br /> brokerage. A brokerage of 0.25% of the contract value will be
          charged for contracts where physical delivery happens. For netted off
          positions in physically settled contracts, a brokerage of 0.1% will be
          charged.
        </p>
      </div>
    </div>
  );
}

export default Brokerage;
