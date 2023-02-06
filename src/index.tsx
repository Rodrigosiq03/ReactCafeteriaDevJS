import { StrictMode } from 'react'
import { BrowserRouter } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import { ThemeProvider } from 'styled-components';
import reportWebVitals from './reportWebVitals';
import AppRoutes from './routes';
import ReactDOM from 'react-dom/client';


// amplify: configuration
import { Amplify } from 'aws-amplify';
import config from './aws-exports';
import { GlobalStyle } from './styles/globalStyles';
import { cafeteriaTheme } from './styles/theme';
import { AuthProvider } from './hooks/Auth';

Amplify.configure(config);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <StrictMode>
    <RecoilRoot>
      <ThemeProvider theme={cafeteriaTheme}>
        <BrowserRouter>
          <AuthProvider>
            <GlobalStyle />
            <AppRoutes />
          </AuthProvider>
        </BrowserRouter>
      </ThemeProvider>
    </RecoilRoot>
  </StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
