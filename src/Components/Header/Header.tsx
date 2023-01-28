import { FC } from "react"
import styles from "./Header.module.css"
import Logo from "../../images/logo.png"

const Header: FC = () => {
	return (
		<header id={styles.header}>
			<a href="#top">
				<img src={Logo} alt="Logo" className={styles.logo} />
			</a>
			<a href="#experience">Experience</a>
			<a href="#education">Education</a>
		</header>
	)
}

export default Header
