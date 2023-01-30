import { FC } from "react"
import styles from "./Contact.module.css"

const Contact: FC = () => {
	return (
		<section id="contact" className={styles.contact}>
			<a href="mailto:jeffreyshum0416@gmail.com">
				<button className={styles.button}>
					<h1>Get In Touch</h1>
				</button>
			</a>
		</section>
	)
}

export default Contact
