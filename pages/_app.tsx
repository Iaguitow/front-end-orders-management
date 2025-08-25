import { ThemeProvider } from '../src/hooks/contexts/themeContext';
import { Provider } from 'react-redux';
import { store } from '../store';
import 'antd/dist/reset.css';
import '../src/app/globals.css';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </ThemeProvider>
  );
}

export default MyApp;
