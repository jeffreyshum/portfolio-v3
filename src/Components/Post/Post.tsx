import { FC } from "react"
import styles from "./Post.module.css"
import bookmark from "../../images/post/bookmark.png"
import comment from "../../images/post/comment.png"
import heart from "../../images/post/heart.png"
import send from "../../images/post/send.png"
import more from "../../images/post/more.png"

const Post: FC<{ random: number }> = ({ random }) => {
	const name = Math.random()
		.toString()
		.substring(0, Math.random() * 3 + 5)

	return (
		<div className={styles.postContainer}>
			<div className={styles.postHead}>
				<div className={styles.left}>
					<img
						src={`https://avatars.dicebear.com/api/micah/${
							Math.random() * random
						}.svg`}
						alt="post"
						className={styles.avatar}
					></img>
					<span className={styles.name}>{name}</span>
				</div>
				<div className={styles.right}>
					<img src={more} alt="more" className={styles.more} />
				</div>
			</div>
			<img
				src={`https://picsum.photos/200/300/?blur&random=${random}`}
				alt="post"
				className={styles.postImage}
			/>
			<div className={styles.actionBar}>
				<div className={styles.left}>
					<img
						src={heart}
						alt="heart"
						className={styles.actionIcon}
					/>
					<img
						src={comment}
						alt="comment"
						className={styles.actionIcon}
					/>
					<img src={send} alt="send" className={styles.actionIcon} />
				</div>
				<div className={styles.right}>
					<img
						src={bookmark}
						alt="bookmark"
						className={styles.actionIcon}
					/>
				</div>
			</div>
		</div>
	)
}

export default Post
