import React from "react";
import "./Coins.css";

const Coins = ({
  image,
  name,
  symbol,
  price,
  volume,
  priceChange,
  marketCap,
}) => (
  <div className="coin-container">
    <div class="coin-row">
      <div class="coin">
        <img src={image} alt="crypto" />
        <h1>{name}</h1>
        <p class="coin-symbol">{symbol.toUpperCase()}</p>
      </div>
      <div class="coin-data">
        <p class="coin-price">${price}</p>
        <p class="coin-volume">${volume.toLocaleString()}</p>
        {priceChange > 0 ? (
          <p className="coin-percent red">{priceChange.toFixed(2)}%</p>
        ) : (
            <p class="coin-percent green">
              {isNaN(priceChange) ? priceChange : priceChange.toFixed(2)}%
            </p>
          )}
        <p class="coin-market-cap">${marketCap}</p>
      </div>
    </div>
  </div>
);

export default Coins;
