import styled from '@emotion/styled';
import rmq from 'styled-rmq';

// Component.
const Home = () => (
	<Wrap>
		<Heading>Next.js Base</Heading>
		<Button href="https://github.com/ahmadawais/next-base">🌟 Next.js Base</Button>
	</Wrap>
);

// Styles.
const Wrap = styled.div`
	display: table;
	width: 100%;
	margin: 0 auto;
	max-width: 750px;
`;

const Heading = styled.h1`
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

const Button = styled.a`
	text-decoration: none;
	color: ${props => props.theme.w};
	background: ${props => props.theme.purple};
	padding: ${props => (props.theme.vr * 1) / 2}rem ${props => props.theme.vr * 1}rem;
`;

export default Home;
