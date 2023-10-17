import '@/styles/globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { CssVarsProvider } from '@mui/joy/styles';
import type { AppProps } from 'next/app';
import theme from '../utils/theme';
import '@fontsource/inter';
import { Stack } from '@mui/joy';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CssVarsProvider theme={theme}>
      <Stack direction={"column"} alignItems="center">
      <Header />
      <Component {...pageProps} />
      <Footer />
      </Stack>
    </CssVarsProvider>
  );
}
