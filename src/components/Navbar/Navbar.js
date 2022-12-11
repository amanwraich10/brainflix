import "../../components/Navbar/Navbar.scss";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
	const buttonHandler = (event) => {
		event.preventDefault();
	};
	return (
		<>
			<div className="navbar">
				<Link to="/">
					<p className="navbar__logo"></p>
				</Link>

				<form onClick={buttonHandler} className="navabr__form">
					<div className="navbar__search">
						<input
							className="navbar__input"
							type="text"
							placeholder="Search"
						></input>
						<div className="navbar__image" />
					</div>
					<NavLink to="upload">
						<button className="navbar__button">UPLOAD</button>
					</NavLink>
				</form>
			</div>
		</>
	);
}

export default Navbar;
