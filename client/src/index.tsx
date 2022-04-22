import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App/App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
    <h1 className="bg-blue-200 text-3xl font-bold underline">Hello world!</h1>
  </React.StrictMode>
);

