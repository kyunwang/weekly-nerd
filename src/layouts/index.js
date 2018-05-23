import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import './index.css';
import '../styles/layout-overide.css';

function Layout({ children, data }) {
	return (
		<div>
			<Helmet
				title={data.site.siteMetadata.title}
				meta={[
					{ name: 'description', content: 'Sample' },
					{ name: 'keywords', content: 'sample, something' },
				]}
			/>
			<Header siteTitle={data.site.siteMetadata.title} />
			<div
				style={{
					margin: '0 auto',
					maxWidth: 980,
					display: 'flex',
					flexDirection: 'row',
					justifyContent: 'space-between',
					height: '100%',
					padding: '25px',
				}}
			>
				<div style={{ flex: 2.5, paddingRight: '30px' }}>{children()}</div>
				<div style={{ flex: 1 }}>
					<Sidebar
						title="WNerd"
						description="Articles on React and Node.js. All articles are written by Me. Fullstack Web Development."
					/>
					<Sidebar
						title="About author"
						description="I am a Full-stack Web Developer specializing in React and Node.js based in Nigeria."
					/>
				</div>
			</div>
		</div>
	);
}

Layout.propTypes = {
	children: PropTypes.func,
};

export default Layout;

export const query = graphql`
	query SiteTitleQuery {
		site {
			siteMetadata {
				title
			}
		}
	}
`;
