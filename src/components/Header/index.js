// @flow

import React from 'react';

import Link from 'gatsby-link';

import './index.css';

type Props = {
	siteTitle: string,
 };

function Header({ siteTitle }: Props) {
	return (
		<header>
			<div>
				<h1>
					<Link to="/" className="link">
						{siteTitle}
					</Link>
				</h1>
			</div>
		</header>
	);
}

export default Header;
