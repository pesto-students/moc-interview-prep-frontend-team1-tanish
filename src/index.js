import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from "./Redux/store";
import * as Sentry from "@sentry/react";
import { Integrations } from "@sentry/tracing";


Sentry.init({
  dsn: "https://3b18c0dcbc18421eaf1eb10ccb1e6074@o1396883.ingest.sentry.io/6721626", //paste copied DSN value here
  integrations: [new Integrations.BrowserTracing()],
  

  tracesSampleRate: 1.0, //lower the value in production
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <App /> 
    </Provider>
  </React.StrictMode>
);

reportWebVitals();









