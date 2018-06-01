// @flow
import React from 'react';
import PropTypes from 'prop-types';

type Props = {
	title: string,
	description: string
}

function Sidebar(props: Props) {
	return (
		<div
			style={{
				border: '2px solid #e6e6e6',
				maxWidth: 960,
				padding: '0.5rem',
				marginBottom: '25px',
			}}
		>
			<strong>{props.title}.</strong> {props.description}
		</div>
	);
}

export default Sidebar;
