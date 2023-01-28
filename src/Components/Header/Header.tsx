import { FC, useLayoutEffect, useRef, useState } from "react"
import styles from "./Header.module.css"
import Logo from "../../images/logo.png"
import classNames from "classnames"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/all"
import menuIcon from "../../images/menu.svg"
import closeIcon from "../../images/close.svg"

const Header: FC = () => {
	const headerRef = useRef<HTMLDivElement>(null)
	const [active, setActive] = useState(false)

	useLayoutEffect(() => {
		gsap.registerPlugin(ScrollTrigger)

		const header = headerRef.current!

		gsap.to(header, {
			scrollTrigger: {
				trigger: "#experience",
				start: "top 100vh",
				endTrigger: "html",
				end: "bottom top",
			},
			opacity: 1,
		})
	}, [])

	return (
		<header id={styles.header} ref={headerRef}>
			<a href="#top">
				<img
					src={Logo}
					alt="Logo"
					className={classNames(
						styles.logo,
						active ? styles.hidden : styles.visible
					)}
				/>
			</a>
			<nav id={styles.nav}>
				<a href="#experience" className={styles.link}>
					Experience
				</a>
				<a href="#education" className={styles.link}>
					Education
				</a>
				<a href="#showcase" className={styles.link}>
					Showcase
				</a>
				<a
					href="/resume.pdf"
					className={classNames(styles.link, styles.resume)}
					target="_blank"
					rel="noreferrer"
				>
					Resume
				</a>
			</nav>
			<nav id={styles.mobileNav}>
				<button
					className={styles.button}
					onClick={() => setActive(!active)}
				>
					<img
						src={active ? closeIcon : menuIcon}
						className={styles.hamburger}
						alt="toggle"
					/>
				</button>
				<div
					id={styles.mobileLinks}
					className={classNames(
						active ? styles.active : styles.inactive
					)}
				>
					<a href="#experience" className={styles.link}>
						Experience
					</a>
					<a href="#education" className={styles.link}>
						Education
					</a>
					<a href="#showcase" className={styles.link}>
						Showcase
					</a>
					<a
						href="/resume.pdf"
						className={classNames(styles.link, styles.resume)}
						target="_blank"
						rel="noreferrer"
					>
						Resume
					</a>
				</div>
			</nav>
		</header>
	)
}

export default Header
