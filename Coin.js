import React from "react";
import "./Coin.css";
import { useHistory } from "react-router-dom";

const Coin = ({ id, icon, name, symbol, price, marketCap }) => {
 const history = useHistory();
 return (
  <div className="coinContainer">
   <div className="coinRow">
    <div className="coinData">
     <div className="coin">
      <img src={icon} alt="" />
      <h1 className="coinName">{name}</h1>
      <p className="coinSymbol">{symbol}</p>
      <p className="coinPrice">$ {price.toFixed(2)}</p>
      <p className="coinVolume">$ {marketCap.toLocaleString()}</p>
      <button
       onClick={() => {
        history.push(`/CoinPage/${id}`);
       }}
      >
       Coin Info
      </button>
     </div>
    </div>
   </div>
  </div>
 );
};

export default Coin;
