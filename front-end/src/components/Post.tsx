import { FiMoreHorizontal } from "react-icons/fi";
import { AiOutlineHeart, AiOutlineMessage } from "react-icons/ai";
import { IPost } from "../interfaces";

type PostHeader = {
	username: string;
};

type PostFooter = {
	username?: string;
	caption?: string;
	likesQuantity?: number;
};

type PostComment = {
	commentUsername?: string;
	comment?: string;
	timeStamp?: string;
};

export const Post = ({
	username,
	caption,
	imgUrl,
	userProfile,
	likesQuantity,
	commentUsername,
	comment,
	timeStamp,
}: IPost) => {
	// const PostHeader = ({ username }: PostHeader) => {
		const PostHeader = () => {
		return (
			<header className="post__header">
				<div className="post__account">
					<div className="post__profile__pic">
							<img src={userProfile} alt=""/>
						</div>
					{/* <div className="post__account__username">{username}</div> */}
					<div className="post__account__username"></div>
				</div>
				<FiMoreHorizontal style={{ cursor: "pointer" }} />
			</header>
		);
	};

	const PostFooter = ({ caption, likesQuantity }: PostFooter) => {
		return (
			<>
				<div className="post__footer spacing10">
					<AiOutlineHeart />
					<AiOutlineMessage />
					<p>{`${likesQuantity}`} likes</p>
				</div>
				<div className="post__caption">
					<span className="post__username"></span>
					<span className="post__caption__text">{caption}</span>
				</div>
			</>
		);
	};

	const PostComment = ({
		commentUsername,
		comment,
		timeStamp,
	}: PostComment) => {
		return (
			<>
				<div className="post__comment">
					<div className="user-comments">
						<span className="username">{commentUsername}</span>
						<span className="comment">{comment}</span>
					</div>
					<AiOutlineHeart size="0.8em" />
				</div>
				<p className="time-stamp">{timeStamp}</p>
				<div className="add-comment">
					<input id="comment-input" placeholder="Add a comment..." />
					<input type="button" value="Post" className="post__btn" />
				</div>
			</>
		);
	};

	return (
		<article className="post__card">
			{/* <PostHeader username={username} /> */}
			<PostHeader/>
			<img src={imgUrl} alt={username}/>
			{/* <PostFooter
				username={username}
				caption={caption}
				likesQuantity={likesQuantity}
			/> */}
<PostFooter
				
				caption={caption}
				likesQuantity={likesQuantity}
			/>
			
			{/* <PostComment
				commentUsername={commentUsername}
				comment={comment}
				timeStamp={timeStamp}
			/> */}
		</article>
	);
};