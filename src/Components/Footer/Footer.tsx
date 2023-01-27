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
			<a href="https://deviceframes.com/">
				Device Mockups by DeviceFrames
			</a>
			<a href="https://www.freepik.com/free-vector/isometric-graduation-set-with-dancing-students-tossing-up-academic-hats-images-workplaces-school-building-vector-illustration_26760604.htm#query=isometric%20teacher&position=2&from_view=search&track=sph">
				Images by macrovector
			</a>
		</footer>
	)
}

export default Footer
