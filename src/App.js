/** @format */

import Stock from './Stock';

function App() {
  return (
    <div className="bg-black min-h-screen">
      <h1 className="text-white text-2xl text-center font-mono pt-3">
        Calculate profit or loss on your stocks
      </h1>
      <Stock />
    </div>
  );
}

export default App;
