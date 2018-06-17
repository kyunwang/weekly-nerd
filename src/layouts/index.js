import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import Header from '../components/Header';
import Sidebar from '../components/Sidebar';

import '../styles/reset.css';
import styles from './layout.module.scss';

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

			<div className={styles.contentCon}>
				<main className={styles.childCon}>{children()}</main>

				<aside className={styles.extraBar}>
					<Sidebar
						// title={data.site.siteMetadata.title}
						description="Sharing thoughts about tech and stuff and learning how to write."
					/>
					<Sidebar
						title="About author"
						description="A front-end developer located in The Netherlands."
					/>
				</aside>
			</div>
		</div>
	);
}

Layout.propTypes = {
	children: PropTypes.func.isRequired,
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
