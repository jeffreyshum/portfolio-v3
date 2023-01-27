import { FC } from "react"
import styles from "./Education.module.css"
import data from "./EducationData"

const Education: FC = () => {
	return (
		<section id="education" className={styles.education}>
			<h1>A Life of Learning</h1>
			{data.map((education, index) => (
				<div className={styles.item} key={index}>
					<div className={styles.title}>
						<div className={styles.left}>
							<h2 className={styles.school}>
								{education.school}
							</h2>
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
					<h2>Awards & Designations</h2>
					<div className={styles.designationContainer}>
						{education.designations.map((designation, index) => (
							<div className={styles.designation}>
								<div className={styles.left}>
									<p className={styles.designationTitle}>
										{designation.title}
									</p>
									<p className={styles.designationAwarder}>
										Awarded By: {designation.awarder}
									</p>
								</div>
								<div className={styles.right}>
									<p className={styles.time}>
										{designation.time}
									</p>
								</div>
							</div>
						))}
					</div>
				</div>
			))}
		</section>
	)
}

export default Education
