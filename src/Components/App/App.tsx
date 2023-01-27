import { FC } from "react"
import Education from "../Education/Education"
import Footer from "../Footer/Footer"
import Header from "../Header/Header"
import Hero from "../Hero/Hero"

const App: FC = () => {
	return (
		<>
			<Header />
			<Hero />
			<Education />
			<Footer />
		</>
	)
}

export default App
