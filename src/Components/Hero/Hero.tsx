import { FC } from "react"
import styles from "./Hero.module.css"
import devImage from "../../images/dev.png"
import mathImage from "../../images/math.png"
import educatingImage from "../../images/educating.png"

const Hero: FC = () => {
	return (
		<section id={styles.hero}>
			<div id={styles.splash}>
				<span id={styles.preamble}>Hi, I'm</span>
				<br />
				<span id={styles.name}>Jeffrey Shum.</span>
				<br />I am a software developer with a passion for{" "}
				<span id={styles.devText} className={styles.highlight}>
					Front-End Development,
				</span>{" "}
				<span id={styles.mathText} className={styles.highlight}>
					Mathematics,
				</span>{" "}
				and{" "}
				<span id={styles.educatingText} className={styles.highlight}>
					Educating
				</span>
				.
				<div id={styles.imageContainer}>
					<img
						id={styles.devImage}
						src={devImage}
						alt=""
						className={styles.image}
					/>
					<img
						id={styles.mathImage}
						src={mathImage}
						alt=""
						className={styles.image}
					/>
					<img
						id={styles.educatingImage}
						src={educatingImage}
						alt=""
						className={styles.image}
					/>
				</div>
			</div>
		</section>
	)
}

export default Hero
