import { FC } from "react"
import Contact from "../Contact/Contact"
import Education from "../Education/Education"
import Experience from "../Experience/Experience"
import Footer from "../Footer/Footer"
import Header from "../Header/Header"
import Hero from "../Hero/Hero"
import Showcase from "../Showcase/Showcase"
import styles from "./App.module.css"
const App: FC = () => {
	return (
		<>
			<Header />
			<div id={styles.content}>
				<Hero />
				<Experience />
				<Education />
				<Showcase />
				<Contact />
				<Footer />
			</div>
		</>
	)
}

export default App
