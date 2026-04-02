import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/globals.css';
import { EastarJetHomePage } from './pages/EastarJetHomePage';
import { CheckedBaggagePage } from './pages/CheckedBaggagePage';
import CheckedBaggagePageB from './pages/CheckedBaggagePageB';
import EmailReceiptPage from './pages/EmailReceiptPage';

const pathname = window.location.pathname;

const App = () => {
  if (pathname === '/checked-baggage') return <CheckedBaggagePage />;
  if (pathname === '/checked-baggage-b') return <CheckedBaggagePageB />;
  if (pathname === '/home') return <EastarJetHomePage />;
  return <EmailReceiptPage />;
};

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
