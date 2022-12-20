import { FC, useLayoutEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import styles from "./Transition.module.css"
import Post from "../Post/Post"

const Transition: FC = () => {
	const fillerRef = useRef<HTMLDivElement>(null)

	useLayoutEffect(() => {
		gsap.registerPlugin(ScrollTrigger)

		const filler = fillerRef.current!

		gsap.to(filler, {
			x: () =>
				-(filler.scrollWidth - document.documentElement.clientWidth) +
				"px",
			ease: "none",
			scrollTrigger: {
				trigger: filler,
				invalidateOnRefresh: true,
				pin: true,
				scrub: true,
				end: () => "+=" + 1500,
			},
		})
	}, [])

	// useLayoutEffect(() => {
	// 	const main = mainRef.current!

	// 	gsap.to(main, {
	// 		scrollTrigger: {
	// 			trigger: main,
	// 			scrub: true,
	// 		},
	// 		scale: 10,
	// 		duration: 2,
	// 		ease: "none",
	// 	})
	// }, [])

	return (
		<>
			<section className={styles.transition} ref={fillerRef}>
				{[...Array(8)].map((_, i) => (
					<Post random={i} />
				))}
			</section>
			<section className={styles.main}></section>
		</>
	)
}

export default Transition
