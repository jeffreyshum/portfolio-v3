import { FC } from "react"
import Education from "../Education/Education"
import Experience from "../Experience/Experience"
import Footer from "../Footer/Footer"
import Header from "../Header/Header"
import Hero from "../Hero/Hero"

const App: FC = () => {
	return (
		<>
			<Header />
			<Hero />
			<Experience />
			<Education />
			<Footer />
		</>
	)
}

export default App
