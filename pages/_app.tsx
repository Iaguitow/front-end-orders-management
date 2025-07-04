import { Provider } from 'react-redux';
import { store } from '../store';
import 'antd/dist/reset.css';
import '../src/app/globals.css';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
