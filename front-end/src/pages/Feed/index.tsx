import { useEffect } from "react";
import { Dispatch } from 'redux';

import { ProfileCard,Post, Header } from "../../components";
import { IPost } from "../../interfaces";

import { postLoad } from "../../redux/post/postActions"
import { useAppSelector, useAppDispatch } from '../../redux/hooks'

const Feed = () => {

	const posts = useAppSelector(state => state.postReducer); 
    const dispatch = useAppDispatch();

	useEffect(() => { 
		dispatch(postLoad() as Dispatch); 
		  }, 
		[dispatch]);

	//test with mock data
	const postList: IPost[] = posts.posts;

	return (
		<>
		 <Header/>
		<main className="feed__container">
			<div className="post__list">
				{postList.map((post) => {
					return <Post {...post} key={post._id} />
				})}
			</div>
			<div className="info__section">
				<div className="info__list">
				<ProfileCard />
					</div>
			</div>
		</main>
		</>
	);
};

export default Feed;