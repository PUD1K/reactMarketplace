import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App';
import { BrowserRouter } from 'react-router-dom'
import { setupStore } from './store/store';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './index.css'

const container = document.getElementById('root')!;
const root = createRoot(container);

const store = setupStore();

root.render(
  <BrowserRouter>
    <Provider store={store}>
      <React.StrictMode>
          <App />
      </React.StrictMode>
    </Provider>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
