import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";
import "./Coins";
import Coins from "./Coins";

const API =
  "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false";

function App() {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios
      .get(API)
      .then((res) => {
        setCoins(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log("not getting api");
      });
  });

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const fCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="coin-app">
      <div class="coin-search">
        <h1 class="coin-text">Search for a currency:</h1>
        <h3 class="coin-subtext">Note: data updates every 24 hours</h3>
        <form>
          <input
            type="text"
            placeholder="Search"
            class="coin-input"
            onChange={handleChange}
          ></input>
        </form>
      </div>
      <div className="coin-header">
        <h2 className="name">Crypto</h2>
        <h2 className="symbol">Symbol</h2>
        <h2 className="price">Price</h2>
        <h2 className="volume">Volume</h2>
        <h2 className="prc">Change%</h2>
        <h2 className="markcp">Market Cap</h2>
      </div>
      {fCoins.map((coin) => {
        return (
          <Coins
            key={coin.id}
            name={coin.name}
            image={coin.image}
            symbol={coin.symbol}
            volume={coin.total_volume}
            price={coin.current_price}
            priceChange={coin.price_change_percentage_24h}
            marketCap={coin.market_cap}
          />
        );
      })}
      <div class="advert">
        <div class="line1">Made with ❤️ by Justin Chanhom</div>
        <div class="line2">
          <img
            src="https://i.imgur.com/JmQLlvf_d.webp?maxwidth=760&fidelity=grand"
            alt="chien"
          />
          Sardet
        </div>
      </div>
    </div>
  );
}

export default App;
