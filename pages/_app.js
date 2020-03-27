import { ThemeProvider } from 'emotion-theming';
import GlobalCSS from '../utils/GlobalCSS';
import theme from '../utils/theme';

const App = ({ Component, pageProps }) => {
	return (
		<ThemeProvider theme={theme}>
			<GlobalCSS />
			<Component {...pageProps} />
		</ThemeProvider>
	);
};

export default App;
