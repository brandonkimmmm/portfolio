import App, { AppContext, AppProps as NextAppProps } from 'next/app';
import Layout from '../components/Layout';
import { AuthProvider } from '../context/AuthContext';
import { UserProvider } from '../context/UserContext';
import { PortfolioProvider } from '../context/PortfolioContext';
import { User, Project, Technology } from '../models';
import cookies from 'next-cookies';
import '../styles/globals.css';

interface AppProps extends NextAppProps {
	user: User;
	projects: Project[];
	technologies: Technology[];
	token?: string;
}

const MyApp = ({
	Component,
	pageProps,
	user,
	projects,
	technologies,
	token
}: AppProps) => {
	return (
		// <AuthProvider token={token}>
		// 	<UserProvider user={user}>
		// 		<PortfolioProvider
		// 			projects={projects}
		// 			technologies={technologies}
		// 		>
		<Layout>
			<Component {...pageProps} />
		</Layout>
		// 		</PortfolioProvider>
		// 	</UserProvider>
		// </AuthProvider>
	);
};

// // This disables the ability to perform automatic static optimization, causing every page in your app to be server-side rendered.
// MyApp.getInitialProps = async (appContext: AppContext) => {
// 	const userRes = await fetch(`${process.env.API_URL}/user`);
// 	const user = await userRes.json();

// 	const projectsRes = await fetch(`${process.env.API_URL}/projects`);
// 	const projects = await projectsRes.json();

// 	const technologiesRes = await fetch(`${process.env.API_URL}/technologies`);
// 	const technologies = await technologiesRes.json();

// 	const appProps = await App.getInitialProps(appContext);

// 	const { token } = cookies(appContext.ctx);

// 	return {
// 		...appProps,
// 		user,
// 		projects,
// 		technologies,
// 		token
// 	};
// };

export default MyApp;
