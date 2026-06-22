import React from 'react';
import ReactDOM from 'react-dom/client';

function App() {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '2rem' }}>
      <h1>OctoFit Tracker</h1>
      <p>React 19 + Vite frontend scaffold.</p>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
