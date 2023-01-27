import { FC } from "react"
import styles from "./Footer.module.css"

const Footer: FC = () => {
	return (
		<footer id={styles.footer}>
			<span className={styles.copyright}>
				Copyright © {new Date().getFullYear()} Jeffrey Shum. All Rights
				Reserved.
			</span>
			<div id={styles.socialContainer}>
				<a
					href="https://github.com/jeffreyshum"
					target="_blank"
					rel="noopener noreferrer"
				>
					<img
						src={"/social/github.svg"}
						className={styles.socialIcon}
						alt="GitHub"
						title="GitHub"
					/>
				</a>
				<a
					href="https://www.linkedin.com/in/shumjeffrey/"
					target="_blank"
					rel="noopener noreferrer"
				>
					<img
						src={"/social/linkedin.svg"}
						className={styles.socialIcon}
						alt="LinkedIn"
						title="LinkedIn"
					/>
				</a>
				<a
					href="https://www.instagram.com/jeffreyshum_/"
					target="_blank"
					rel="noopener noreferrer"
				>
					<img
						src={"/social/instagram.svg"}
						className={styles.socialIcon}
						alt="Instagram"
						title="Instagram"
					/>
				</a>
			</div>
			<a
				href="https://icons8.com/"
				target="_blank"
				rel="noopener noreferrer"
			>
				Icons by Icons8
			</a>
		</footer>
	)
}

export default Footer
