import React, { useState, useEffect } from "react";
import "./Coinpage.css";
import Axios from "axios";
import { useParams, Link } from "react-router-dom";
import background from "../assets/blue-blockchain-cryptocurrency.jpg";

function Coinpage() {
 let { id } = useParams();
 const [coin, setCoin] = useState(null);

 useEffect(() => {
  Axios.get(`https://api.coingecko.com/api/v3/coins/${id}`).then((response) => {
   setCoin(response.data);
   //console.log(response.data);
  });
 });

 if (coin) {
  return (
   <div
    className="coin-Container"
    style={{
     backgroundImage: `url(${background})`,
     backgroundRepeat: "no-repeat",
     backgroundSize: "cover",
    }}
   >
    <div className="coin-Info">
     <h1>{coin.name}</h1>
     <img src={coin.image.large} alt="Icon" className="coin-Icon" />
     <div className="coin-Data">
      <div className="coin-Row">
       <h3 className="coin-RowHeader">Coin Symbol: </h3>
       <h3 className="coin-RowData">{coin.symbol}</h3>
      </div>
      <div className="coin-Row">
       <h3 className="coin-RowHeader">Current Price:</h3>
       <h3 className="coin-RowData">
        $ {coin.market_data.current_price.usd.toLocaleString()}
       </h3>
      </div>
      <div className="coin-Row">
       <h3 className="coin-RowHeader">Market Cap:</h3>
       <h3 className="coin-RowData">
        $ {coin.market_data.market_cap.usd.toLocaleString()}
       </h3>
      </div>
      <div className="coin-Row">
       <h3 className="coin-RowHeader">Total Volume:</h3>
       <h3 className="coin-RowData">
        $ {coin.market_data.total_volume.usd.toLocaleString()}
       </h3>
      </div>
     </div>
     <Link to="/">
      <div className="coin-RouteButton">Go back</div>
     </Link>
    </div>
   </div>
  );
 } else {
  return null;
 }
}

export default Coinpage;
