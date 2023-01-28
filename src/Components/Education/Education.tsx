import { FC } from "react"
import styles from "./Education.module.css"
import data from "./EducationData"

const Education: FC = () => {
	return (
		<section id="education" className={styles.education}>
			<h1 className={styles.heading}>A Life of Learning</h1>
			{data.map((education, index) => (
				<div className={styles.item} key={index}>
					<div className={styles.title}>
						<div className={styles.left}>
							<a
								href={education.link}
								target="_blank"
								rel="noreferrer"
							>
								<h2 className={styles.school}>
									{education.school}
								</h2>
							</a>

							<p className={styles.degree}>{education.degree}</p>
						</div>
						<div className={styles.right}>
							<h2 className={styles.time}>{education.time}</h2>
						</div>
					</div>
					<p className={styles.description}>
						{education.description}
					</p>
					<em className={styles.grade}>{education.grade}</em>
					<h4>Awards & Designations</h4>
					<ul className={styles.designationContainer}>
						{education.designations.map((designation, index) => (
							<li className={styles.designation}>
								<div className={styles.left}>
									<p className={styles.designationTitle}>
										{designation.title}
									</p>
									<p className={styles.designationAwarder}>
										{designation.awarder}
									</p>
								</div>
								<div className={styles.right}>
									<p className={styles.time}>
										{designation.time}
									</p>
								</div>
							</li>
						))}
					</ul>
				</div>
			))}
		</section>
	)
}

export default Education
