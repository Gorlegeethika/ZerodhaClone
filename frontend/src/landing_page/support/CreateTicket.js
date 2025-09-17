import React, { useState } from 'react';

function CreateTicket() {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <div className="container-fluid">
      <div className="row p-4">
        {/* Left Accordion */}
        <div className="col-8">
          {[
            {
              id: "account",
              title: "Account Opening",
              icon: "fa-solid fa-circle-plus",
              items: [
                "Resident individual",
                "Minor",
                "Non Resident Indian (NRI)",
                "Company, Partnership, HUF and LLP",
                "Glossary",
              ],
            },
            {
              id: "zerodha",
              title: "Zerodha Account",
              icon: "fa-solid fa-circle-user",
              items: [" Your Profile","Account modification","Client Master Report(CMR) and Depository Participant(DP)","Nomination","Transfer and conversion of securities"],
            },
            {
              id: "kite",
              title: "Kite",
              icon: "fa-solid fa-arrow-left",
              items: ["IPO", "Trading FAQs", "Margin Trading Facility(MTF) and Margins","Charts and orders","Alerts and Nudgets","General"],
            },
            {
              id: "funds",
              title: "Funds",
              icon: "fa-solid fa-indian-rupee-sign",
              items: ["Add money", "Withdraw money", "Add bank accounts","eManadates"],
            },
            {
              id: "console",
              title: "Console",
              icon: "fa-regular fa-circle-user",
              items: [
                "Portfolio",
                "Corporate actions",
                "Funds statement",
                "Reports",
                "Profile",
                "Segments",
              ],
            },
            {
              id: "coin",
              title: "Coin",
              icon: "fa-solid fa-circle-notch",
              items: [
                "Mutual funds",
                "National Pension Scheme (NPS)",
                "Fixed Deposit (FD)",
                "Features on coin",
                "Payments and Orders",
                "General",
              ],
            },
          ].map((section) => (
            <div key={section.id} className="mb-3 p-3 border bg-white">
              <div className="d-flex justify-content-between align-items-center">
                <button
                  className="btn text-start flex-grow-1 d-flex align-items-center"
                  style={{
                    fontSize: "18px",
                    fontWeight: "600",
                    padding: "5px",
                    border: "none",
                    background: "transparent",
                  }}
                  onClick={() => toggleSection(section.id)}
                >
                  <span>
                    <i
                      className={section.icon}
                      style={{
                        color: "#007bff",
                        fontSize: "23px",
                        marginRight: "30px",
                      }}
                    ></i>
                  </span>
                  <span>{section.title}</span>
                </button>

                <span
                  style={{
                    cursor: "pointer",
                    marginLeft: "10px",
                    fontSize: "20px",
                    transition: "transform 0.3s ease",
                    transform:
                      openSection === section.id
                        ? "rotate(180deg)"
                        : "rotate(0deg)",
                  }}
                  onClick={() => toggleSection(section.id)}
                >
                  ▼
                </span>
              </div>

              {openSection === section.id && (
                <ul
                  className="mt-3"
                  style={{ paddingLeft: "20px", listStyleType: "disc" }}
                >
                  {section.items.map((item, i) => (
                    <li key={i} style={{ marginBottom: "8px" }}>
                      <a
                        href="#"
                        style={{
                          textDecoration: "none",
                          lineHeight: "2.5",
                        }}
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>

        {/* Right Notices Panel */}
        <div className="col-4">
          <div
            className="p-2 border mb-4"
            style={{
              lineHeight: "2",
              backgroundColor: "color-mix(in oklab, #ff9100 10%, transparent)",
            }}
          >
            <ul>
              <li>
                <a href="#" style={{ textAlign: "center" }}>
                  Exclusion of F&O contracts on 8 <br /> securities from August
                  29, 2025
                </a>
              </li>
              <li>
                <a href="#">
                  Revision in expiry day of Index and <br />
                  Stock derivatives contracts
                </a>
              </li>
            </ul>
          </div>

          <div className="p-0 border bg-white rounded shadow-sm">
            <div className="bg-light px-3 py-3 border-bottom">
              <h5 style={{ fontWeight: 600, margin: 0 }}>Quick Links</h5>
            </div>
            <ul className="m-0 p-0 list-unstyled">
              <li className="border-bottom">
                <a href="#" className="d-block px-3 py-3 text-decoration-none">
                  1. Track account opening
                </a>
              </li>
              <li className="border-bottom">
                <a href="#" className="d-block px-3 py-3 text-decoration-none">
                  2. Track segment activation
                </a>
              </li>
              <li className="border-bottom">
                <a href="#" className="d-block px-3 py-3 text-decoration-none">
                  3. Intraday margins
                </a>
              </li>
              <li>
                <a href="#" className="d-block px-3 py-3 text-decoration-none">
                  4. Kite user manual
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateTicket;
