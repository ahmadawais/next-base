import styled from '@emotion/styled';
import { ThemeProvider } from 'emotion-theming';
import rmq from 'styled-rmq';
import GlobalCSS from '../utils/GlobalCSS';
import theme from '../utils/theme';

// Component.
const Home = () => (
	<ThemeProvider theme={theme}>
		<GlobalCSS />
		<Wrap>
			<Text>Next.js Base</Text>
			<Button href="#">GitHub</Button>
		</Wrap>
	</ThemeProvider>
);

// Styles.
const Wrap = styled.div`
	display: table;
	width: 100%;
	margin: 0 auto;
	max-width: 750px;
`;

const Button = styled.a`
	text-decoration: none;
	color: ${props => props.theme.b};
	background: ${props => props.theme.y};
	padding: ${props => (props.theme.vr * 1) / 2}rem ${props => props.theme.vr * 1}rem;

	${rmq('xl')} {
		background: ${props => props.theme.y};
	}
	${rmq('t')} {
		background: ${props => props.theme.green};
	}
`;

const Text = styled.h1`
	color: hotpink;
	margin-bottom: ${props => props.theme.vr * 1}rem;

	${rmq('xl')} {
		font-size: 5rem;
	}
	${rmq('ll')} {
		font-size: 5rem;
	}
	${rmq('ls')} {
		font-size: 4rem;
	}
	${rmq('t')} {
		font-size: 3.5rem;
	}
	${rmq('ml')} {
		font-size: 2.5rem;
	}
	${rmq('mm')} {
		font-size: 2rem;
	}
`;

export default Home;
