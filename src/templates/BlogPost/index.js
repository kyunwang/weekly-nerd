import React from 'react';
import Helmet from 'react-helmet';

import styles from './blog-post-module.css';

function BlogPost({ data }) {
	const post = data.markdownRemark;

	return (
		<div className={styles['blog-post-container']}>
			<Helmet title={`The Litle Tech Blog - ${post.frontmatter.title}`} />
			<article className={styles['blog-post']}>
				<h1>{post.frontmatter.title}</h1>
				<section
					className={styles['blog-post-content']}
					dangerouslySetInnerHTML={{ __html: post.html }}
				/>
			</article>
		</div>
	);
}

export default BlogPost;

export const pageQuery = graphql`
	query BlogPostByPath($path: String!) {
		markdownRemark(frontmatter: { path: { eq: $path } }) {
			html
			frontmatter {
				date(formatString: "MMMM DD, YYYY")
				path
				title
			}
		}
	}
`;
