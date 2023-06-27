import React from 'react';
import ReactDOM from 'react-dom/client';
//import './index.css';
import App from './App';
//import reportWebVitals from './reportWebVitals';


export const renderClient = () => {
    if(typeof(window) !== "undefined"){
      const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
      root.render(
        <React.StrictMode>
          <App />
        </React.StrictMode>
      );

    }

};