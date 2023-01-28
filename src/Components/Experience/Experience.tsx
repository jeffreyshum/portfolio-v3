import { FC } from "react"
import styles from "./Experience.module.css"
import data from "./ExperienceData"

const Experience: FC = () => {
	return (
		<section id="experience" className={styles.experience}>
			<h1 className={styles.heading}>Work Experience</h1>
			<ol id={styles.container}>
				{data.map((experience, index) => (
					<li className={styles.item} key={index}>
						<div className={styles.title}>
							<div className={styles.left}>
								<h2 className={styles.position}>
									{experience.position}
								</h2>
								<a
									href={experience.link}
									target="_blank"
									rel="noreferrer"
									className={styles.company}
								>
									{experience.company}
								</a>
							</div>
							<div className={styles.right}>
								<h2 className={styles.time}>
									{experience.time}
								</h2>
							</div>
						</div>
						<ul>
							{experience.description.map((desc) => (
								<li>{desc}</li>
							))}
						</ul>
					</li>
				))}
			</ol>
		</section>
	)
}

export default Experience
