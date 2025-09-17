import React from 'react';

function Footer() {
  return ( 
    <div className="container-fluid py-4 p-5 border-top " style={{ backgroundColor: "#f8f9fa" }}>  
      <div className="row">
        
        {/* Logo + copyright */}
        <div className="col p-1">
          <img src="media/images/logo.svg" style={{ width: "60%" }} alt="logo" />
          <p className="text-muted mt-2 small">
            © 2010 - 2025, Zerodha Broking Ltd. All rights reserved.
          </p>
        </div>
        
        {/* Account */}
        <div className="col">
          <p className="fw-bold">Account</p>
          <a className="d-block text-muted text-decoration-none mb-3" href="#">Open demat account</a>
          <a className="d-block text-muted text-decoration-none mb-3"  href="#">Minor demat account</a>
          <a className="d-block text-muted text-decoration-none mb-3"  href="#">NRI demat account</a>
          <a className="d-block text-muted text-decoration-none mb-3"  href="#">Commodity</a>
          <a className="d-block text-muted text-decoration-none mb-3"  href="#">Dematerialisation</a>
          <a className="d-block text-muted text-decoration-none mb-3"  href="#">Fund transfer</a>
          <a className="d-block text-muted text-decoration-none mb-3"  href="#">MTF</a>
          <a className="d-block text-muted text-decoration-none mb-3"  href="#">Referral program</a>
        </div>
        
        {/* Support */}
        <div className="col">
          <p className="fw-bold">Support</p>
          <a className="d-block text-muted text-decoration-none mb-3" href="#">Contact us</a>
          <a className="d-block text-muted text-decoration-none mb-3" href="#">Support portal</a>
          <a className="d-block text-muted text-decoration-none mb-3" href="#">How to file a complaint?</a>
          <a className="d-block text-muted text-decoration-none mb-3" href="#">Status of your complaints</a>
          <a className="d-block text-muted text-decoration-none mb-3" href="#">Bulletin</a>
          <a className="d-block text-muted text-decoration-none mb-3" href="#">Circular</a>
          <a className="d-block text-muted text-decoration-none mb-3" href="#">Z-Connect blog</a>
          <a className="d-block text-muted text-decoration-none mb-3" href="#">Downloads</a>
        </div>
        
        {/* Company */}
        <div className="col">
          <p className="fw-bold">Company</p>
          <a className="d-block text-muted text-decoration-none mb-3" href="#">About</a>
          <a className="d-block text-muted text-decoration-none mb-3" href="#">Philosophy</a>
          <a className="d-block text-muted text-decoration-none mb-3" href="#">Press & media</a>
          <a className="d-block text-muted text-decoration-none mb-3" href="#">Careers</a>
          <a className="d-block text-muted text-decoration-none mb-3" href="#">Zerodha Cares (CSR)</a>
          <a className="d-block text-muted text-decoration-none mb-3" href="#">Zerodha.tech</a>
          <a className="d-block text-muted text-decoration-none mb-3" href="#">Open source</a>
        </div>
        
        {/* Quick Links */}
        <div className="col">
          <p className="fw-bold">Quick links</p>
          <a className="d-block text-muted text-decoration-none mb-3" href="#">Upcoming IPOs</a>
          <a className="d-block text-muted text-decoration-none mb-3" href="#">Brokerage charges</a>
          <a className="d-block text-muted text-decoration-none mb-3" href="#">Market holidays</a>
          <a className="d-block text-muted text-decoration-none mb-3" href="#">Economic calendar</a>
          <a className="d-block text-muted text-decoration-none mb-3" href="#">Calculators</a>
          <a className="d-block text-muted text-decoration-none mb-3" href="#">Markets</a>
          <a className="d-block text-muted text-decoration-none mb-3" href="#">Sectors</a>
        </div>

        {/* Disclaimer section */}
         <p className="text-muted p-3 small" style={{ fontSize: "12px", lineHeight: "1.4" }}>
          Zerodha Broking Ltd.: Member of NSE, BSE​ &​ MCX – SEBI Registration no.: INZ000031633 CDSL/NSDL: 
          Depository services through Zerodha Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Commodity 
          Trading through Zerodha Commodities Pvt. Ltd. MCX: 46025; SEBI Registration no.: INZ000038238 
          Registered Address: Zerodha Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public 
          School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any complaints pertaining to 
          securities broking please write to complaints@zerodha.com, for DP related to dp@zerodha.com. Please 
          ensure you carefully read the Risk Disclosure Document as prescribed by SEBI | ICF
          <br /><br />
          Procedure to file a complaint on SEBI SCORES: Register on SCORES portal. Mandatory details for filing 
          complaints on SCORES: Name, PAN, Address, Mobile Number, E-mail ID. Benefits: Effective Communication, 
          Speedy redressal of the grievances
          <br /><br />
          Smart Online Dispute Resolution | Grievances Redressal Mechanism
          <br /><br />
          Investments in securities market are subject to market risks; read all the related documents carefully 
          before investing.
          <br /><br />
          Attention investors: 1) Stock brokers can accept securities as margins from clients only by way of pledge 
          in the depository system w.e.f September 01, 2020. 2) Update your e-mail and phone number with your stock 
          broker / depository participant and receive OTP directly from depository on your e-mail and/or mobile 
          number to create pledge. 3) Check your securities / MF / bonds in the consolidated account statement 
          issued by NSDL/CDSL every month.
          <br /><br />
          India's largest broker based on networth as per NSE. NSE broker factsheet
          <br /><br />
          "Prevent unauthorised transactions in your account. Update your mobile numbers/email IDs with your stock 
          brokers. Receive information of your transactions directly from Exchange on your mobile/email at the end 
          of the day. Issued in the interest of investors. KYC is one time exercise while dealing in securities 
          markets - once KYC is done through a SEBI registered intermediary (broker, DP, Mutual Fund etc.), you 
          need not undergo the same process again when you approach another intermediary." Dear Investor, if you 
          are subscribing to an IPO, there is no need to issue a cheque. Please write the Bank account number and 
          sign the IPO application form to authorize your bank to make payment in case of allotment. In case of 
          non allotment the funds will remain in your bank account. As a business we don't give stock tips, and 
          have not authorized anyone to trade on behalf of others. If you find anyone claiming to be part of 
          Zerodha and offering such services, please create a ticket here.
        </p>
     

        {/* Bottom Links Centered */}
        <p className="d-flex justify-content-center gap-4 mt-3">
          <a href="#" className="text-decoration-none text-muted">NSE</a>
          <a href="#" className="text-decoration-none text-muted">BSE</a>
          <a href="#" className="text-decoration-none text-muted">MCX</a>
          <a href="#" className="text-decoration-none text-muted">Terms & Conditions</a>
          <a href="#" className="text-decoration-none text-muted">Policy & Procedures</a>
          <a href="#" className="text-decoration-none text-muted">Privacy Policy</a>
          <a href="#" className="text-decoration-none text-muted">Disclosure</a>
          <a href="#" className="text-decoration-none text-muted">Investor Charter</a>
        </p>

      </div>
    </div>
  );
}

export default Footer;
