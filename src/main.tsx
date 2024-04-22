import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { store, persistor } from './store/store.ts'
import { GoogleOAuthProvider } from '@react-oauth/google';

const apiKey = import.meta.env.VITE_GOOGLE_CLIENT_ID as string;

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId={apiKey}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>

          <App />
        </PersistGate>
      </Provider>
    </GoogleOAuthProvider>;
  </React.StrictMode>,
)
