import { useState, useEffect } from "react";
import Coin from "../Components/Coin";
import giphy from "../assets/giphy.gif";
import Axios from "axios";

function Home() {
 const [coins, setCoins] = useState([]);
 const [input, setInput] = useState("");
 const [isLoading, setIsLoading] = useState(false);

 useEffect(() => {
  refreshPage();
 }, []);

 const filterCoins = coins.filter((coin) =>
  coin.name.toLowerCase().includes(input.toLowerCase())
 );

 const handleSearch = (e) => {
  setInput(e.target.value);
 };

 const refreshPage = () => {
  setIsLoading(true);
  Axios.get(
   "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
  ).then((response) => {
   console.log(response.data);
   setIsLoading(false);
   setCoins(response.data);
  });
 };

 return (
  <div className="App">
   <div className="headerContainer">
    <h1>Welcome to the CryptoChecker</h1>
    <div className="buttonContainer">
     <input placeholder="Search for a Coin" onChange={handleSearch} />
     <img onClick={refreshPage} src={giphy} alt=""></img>
    </div>
   </div>
   <div className="coinContainer">
    {isLoading && <h1 className="loadingMssg">Fetching Coins ...</h1>}
    {filterCoins.map((coins) => {
     return (
      <Coin
       id={coins.id}
       icon={coins.image}
       coinName={coins.name}
       coinSymbol={coins.symbol}
       price={coins.current_price}
       marketCap={coins.market_cap}
      />
     );
    })}
   </div>
  </div>
 );
}

export default Home;
