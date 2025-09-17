import React, { useState, useContext } from "react";
import axios from "axios";
import { toast } from "react-toastify";

import GeneralContext from "./GeneralContext";
import "./BuyActionWindow.css";

const SellActionWindow = ({ uid }) => {
  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(0.0);
  const generalContext = useContext(GeneralContext);

  const handleSellClick = async () => {
    try {
      await axios.post(
        "https://zerodhaclone-backend-6e4l.onrender.com/sellOrder",
        { name: uid, qty: stockQuantity, price: stockPrice, mode: "SELL" },
        { withCredentials: true }
      );
      toast.success("Sell order placed successfully!", { position: "top-right" });
      generalContext.closeSellWindow();
    } catch (err) {
      if (err.response?.status === 401) {
        toast.error("You must be logged in to place a sell order.", { position: "top-right" });
      } else {
        toast.error("Failed to place sell order. Please try again.", { position: "top-right" });
      }
    }
  };

  const handleCancelClick = () => {
    generalContext.closeSellWindow();
  };

  return (
    <div className="container" id="sell-window" draggable="true">
      <div className="regular-order">
        <div className="inputs">
          <fieldset>
            <legend>Qty.</legend>
            <input
              type="number"
              value={stockQuantity}
              onChange={(e) => setStockQuantity(e.target.value)}
            />
          </fieldset>
          <fieldset>
            <legend>Price</legend>
            <input
              type="number"
              step="0.05"
              value={stockPrice}
              onChange={(e) => setStockPrice(e.target.value)}
            />
          </fieldset>
        </div>
      </div>

      <div className="buttons">
        <span>Margin required ₹140.65</span>
        <div>
          <button className="btn btn-red" onClick={handleSellClick}>Sell</button>
          <button className="btn btn-grey" onClick={handleCancelClick}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default SellActionWindow;