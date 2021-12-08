/** @format */

import { useState } from 'react';

const Stock = () => {
  const [state, setState] = useState({
    buyPrice: '',
    qty: '',
    sellPrice: '',
  });
  const [disabled, setDisabled] = useState(true);
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const val = e.target.value;
    setState({
      ...state,
      [e.target.name]: val,
    });
    if (state.buyPrice !== '' && state.qty !== '' && state.sellPrice !== '') {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  };

  const handleClick = () => {
    const buyingPrice = Number(state.buyPrice);
    const quantity = Number(state.qty);
    const sellingPrice = Number(state.sellPrice);

    if (buyingPrice > sellingPrice) {
      // loss
      const loss = (buyingPrice - sellingPrice) * quantity;
      const lossPercent = (loss / buyingPrice) * 100;

      setMessage(
        `😰😰😰 Ooops!! Your stock price have fallen by ${lossPercent.toFixed(
          2
        )}% & loss amount is Rs ${loss}`
      );
    } else if (sellingPrice > buyingPrice) {
      // profit
      const profit = (sellingPrice - buyingPrice) * quantity;
      const profitPercent = (profit / buyingPrice) * 100;

      setMessage(
        `🥳🥳🥳 wohoo!! You made a profit of Rs ${profit} and profit percent is ${profitPercent.toFixed(
          2
        )}%`
      );
    } else {
      // nothing
      setMessage(`You are still even and with no loss & no gain`);
    }
  };

  return (
    <div className=" text-center">
      <h1 className=" mt-3 font-mono">Enter buying price</h1>
      <input
        name="buyPrice"
        value={state.buyPrice}
        onChange={handleChange}
        type="number"
        className="bg-transparent  border border-purple-500 rounded w-80 p-2 outline-none mt-1"
      />

      <h1 className=" mt-3 font-mono">Enter quantity</h1>
      <input
        name="qty"
        value={state.qty}
        onChange={handleChange}
        type="number"
        className="bg-transparent  border border-purple-500 rounded w-80 p-2 outline-none mt-1"
      />

      <h1 className=" mt-3 font-mono">Enter current price</h1>
      <input
        name="sellPrice"
        value={state.sellPrice}
        onChange={handleChange}
        type="number"
        className="bg-transparent  border border-purple-500 rounded w-80 p-2 outline-none mt-1"
      />
      <br />
      <button
        disabled={disabled}
        className={`border py-1 px-5 rounded mt-7 ${
          disabled
            ? `cursor-not-allowed border-gray-400 text-gray-400`
            : `border-purple-500 text-purple-500`
        }`}
        onClick={handleClick}
      >
        Check
      </button>

      <div className="text-center text-2xl mt-4">{message && message}</div>
    </div>
  );
};

export default Stock;
