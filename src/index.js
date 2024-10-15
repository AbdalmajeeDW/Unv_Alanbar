import React from 'react';
import ReactDOM from 'react-dom/client';
import '../src/style/css/main.min.css';
import App from './App';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './theme';
import Rtl from './components/Rtl';
import { Provider } from 'react-redux';
import { store } from './store'



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Rtl>
      <ThemeProvider theme={theme}>
        <CssBaseline enableColorScheme />
        <Provider store={store}>
          <App />
        </Provider>
      </ThemeProvider>
    </Rtl>
  </React.StrictMode>
);

