import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      {/* Aquí se incluye el enlace proporcionado */}
      <a
        href="https://app.powerbi.com/view?r=eyJrIjoiNzI3MTQ3MGUtYzYyMi00ZGVhLWEwY2EtZGIxOTZjOTg0NWUwIiwidCI6ImY5MzRlNWY3LTAwODgtNGJlZS1hN2RlLWI5ZWNjNWY2OTQxZCIsImMiOjR9&pageName=3653bcfbcba781c179dc"
        target="_blank"
        rel="noopener noreferrer"
        className="custom-link"
      >
        Ir al informe de Power BI
      </a>
    </>
  );
}

export default App;
