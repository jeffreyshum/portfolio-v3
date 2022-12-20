import { FC, useLayoutEffect, useRef } from "react"
import styles from "./Hero.module.css"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import acceptCall from "../../images/accept-call.png"

const Hero: FC = () => {
	const phoneRef = useRef<HTMLDivElement>(null)
	const sliderRef = useRef<HTMLImageElement>(null)

	useLayoutEffect(() => {
		gsap.registerPlugin(ScrollTrigger)

		const phone = phoneRef.current!
		const slider = sliderRef.current!

		const t1 = gsap.timeline()

		t1.to(phone, {
			scrollTrigger: {
				trigger: phone,
				scrub: true,
				start: "20% 10%",
			},
			scale: 3,
			translateY: 1000,
		})

		t1.to(
			slider,
			{
				scrollTrigger: {
					trigger: slider,
					scrub: true,
					start: "bottom 60%",
				},
				translateX: 175,
			},
			"-=70%"
		)
	}, [])

	return (
		<section className={styles.main} ref={phoneRef}>
			<div className={styles.phone}>
				<div className={styles.phoneScreen}>
					<h1 className={styles.callName}>Jeffrey Shum</h1>
					<div className={styles.slider}>
						<img
							ref={sliderRef}
							src={acceptCall}
							alt="Accept Call"
							className={styles.acceptCall}
						/>
						<h1 className={styles.acceptText}>Scroll to Accept</h1>
					</div>
				</div>
			</div>
			<header></header>
		</section>
	)
}

export default Hero
