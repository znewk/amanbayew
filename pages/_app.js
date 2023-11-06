import '../src/styles/global.css'
import "primereact/resources/themes/viva-dark/theme.css";
import { PrimeReactProvider, PrimeReactContext } from 'primereact/api';

export default function MyApp({ Component, pageProps }) {
    return (
        <PrimeReactProvider>
            <Component {...pageProps} />
        </PrimeReactProvider>


    );
}