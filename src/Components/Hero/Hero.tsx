import { FC } from "react"
import styles from "./Hero.module.css"

const Hero: FC = () => {
	return (
		<section id={styles.hero}>
			<div id={styles.splash}>
				<h2 id={styles.preamble}>Hi, I'm</h2>
				<h1 id={styles.name}>Jeffrey Shum.</h1>
				<h2>
					I am a software developer with a passion for{" "}
					<span className={styles.highlight}>
						Front-End Development
					</span>
					, <span className={styles.highlight}>Mathematics,</span> and{" "}
					<span className={styles.highlight}>Educating</span>.
				</h2>
			</div>
		</section>
	)
}

export default Hero
