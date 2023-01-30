import { FC } from "react"
import styles from "./Showcase.module.css"
import blogImage from "../../images/projects/blog.png"

const Showcase: FC = () => {
	return (
		<section id="showcase" className={styles.showcase}>
			<h1 className={styles.heading}>Showcase</h1>
			<a
				className={styles.project}
				href="https://blog.jeffreyshum.com/"
				target="_blank"
				rel="noreferrer"
			>
				<h2 className={styles.title}>Blog</h2>
				<img src={blogImage} alt="Blog" className={styles.image} />
				<div className={styles.summary}>
					<p className={styles.description}>
						My personal blog, documenting my journey through
						computer science and my progress as a front end
						developer. Posts include weekly developer logs, guides,
						and more.
					</p>
					<ul className={styles.stack}>
						<li>TypeScript</li>
						<li>NextJS</li>
						<li>mdx-bundler</li>
					</ul>
				</div>
			</a>
		</section>
	)
}

export default Showcase
