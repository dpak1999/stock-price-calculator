/** @format */

const Stock = () => {
  return (
    <div className="text-white text-center">
      <h1 className="text-white mt-3 font-mono">Enter buying price</h1>
      <input
        type="number"
        className="bg-transparent text-white border border-purple-500 rounded w-80 p-2 outline-none mt-1"
      />

      <h1 className="text-white mt-3 font-mono">Enter quantity</h1>
      <input
        type="number"
        className="bg-transparent text-white border border-purple-500 rounded w-80 p-2 outline-none mt-1"
      />

      <h1 className="text-white mt-3 font-mono">Enter current price</h1>
      <input
        type="number"
        className="bg-transparent text-white border border-purple-500 rounded w-80 p-2 outline-none mt-1"
      />
      <br />
      <button className="border border-purple-500 py-1 px-5 rounded mt-7">
        Check
      </button>
    </div>
  );
};

export default Stock;
