import React from 'react';

import Link from 'gatsby-link';

import './index.css';

function Header({ siteTitle }) {
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
