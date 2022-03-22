import {
	AiOutlineHome,
	AiOutlineCompass,
	AiOutlineHeart,
	AiOutlineProfile,
	AiOutlineLogout,
} from "react-icons/ai";
import { RiMessengerLine } from "react-icons/ri";
import { Link} from "react-router-dom";
import { IconContext } from "react-icons";

import { useAppSelector, useAppDispatch } from '../redux/hooks'
import { logOut } from "../redux/user/userActions"

export const Header = () => {
	useAppSelector(state => state.userReducer); 
    const dispatch = useAppDispatch();

	const logOutFunction = () => {	
		dispatch(logOut() as any);
	};

	return (
		<nav className="pageheader">
			<div><img src="https://instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png" alt="Instagram"/></div>
			<div className="searchbar">
				
			<div className="searchbar__input">
			<input type="text" id="search" className="searchbar__input-field" placeholder="Search" />
				<span className="coreSpriteSearchIcon"></span>
			</div>
			</div>
			<IconContext.Provider value={{ className: "header-icons" }}>
				<div className="icons">
					<Link to="/feed" className="page-link">
						<AiOutlineHome />
					</Link>
					<RiMessengerLine />
					<Link to="/discover" className="page-link">
						<AiOutlineCompass />
					</Link>
					<AiOutlineHeart />
					<Link to="/profile" className="page-link">
						<AiOutlineProfile />
					</Link>
					<AiOutlineLogout onClick={logOutFunction} className="page-link" />
				</div>
			</IconContext.Provider>
		</nav>
	);
};
