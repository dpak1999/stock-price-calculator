/** @format */

import { useState } from 'react';
import Stock from './Stock';

function App() {
  const [flag, setFlag] = useState(0);
  return (
    <div
      className={`min-h-screen ${
        flag === 1 ? `bg-red-400` : flag === 2 ? `bg-green-400` : ``
      }`}
    >
      <h1 className="text-2xl text-center font-mono pt-3">
        Calculate profit or loss on your stocks
      </h1>
      <Stock flag={flag} setFlag={setFlag} />
    </div>
  );
}

export default App;
