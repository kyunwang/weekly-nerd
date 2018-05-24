// @flow

import React from 'react';

import Link from 'gatsby-link';

import styles from './header.module.css';

type Props = {
	siteTitle: string,
 };

function Header({ siteTitle }: Props) {
	return (
		<header className={styles.header}>
			<div>
				<h1>
					<Link to="/" className={styles.link}>
						{siteTitle}
					</Link>
				</h1>
			</div>
		</header>
	);
}

export default Header;
