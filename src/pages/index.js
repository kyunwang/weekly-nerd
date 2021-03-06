import React from 'react';
import Link from 'gatsby-link';

import styles from './blog-listing.module.scss';

function IndexPage({ data }) {
	const { edges: posts } = data.allMarkdownRemark;

	return (
		<div className={styles['blog-posts']}>
			{posts
				.filter(post => post.node.frontmatter.title.length > 0 && !post.node.frontmatter.draft)
				.map(({ node: post }) => {
					return (
						<div className={styles['blog-post-preview']} key={post.id}>
							<h1>
								<Link to={post.frontmatter.path}>{post.frontmatter.title}</Link>
							</h1>
							<h2>{post.frontmatter.date}</h2>
							<p>{post.excerpt}</p>
						</div>
					);
				})}
		</div>
	);
}

export const pageQuery = graphql`
	query IndexQuery {
		allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
			edges {
				node {
					excerpt(pruneLength: 250)
					id
					frontmatter {
						title
						date(formatString: "MMMM DD, YYYY")
						path
						draft
					}
				}
			}
		}
	}
`;

export default IndexPage;
