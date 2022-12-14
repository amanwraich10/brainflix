import "../../components/Navbar/Navbar.scss";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
	return (
		<>
			<div className="navbar">
				<Link to="/">
					<p className="navbar__logo"></p>
				</Link>

				<form className="navabr__form">
					<div className="navbar__search">
						<input
							className="navbar__input"
							type="text"
							placeholder="Search"
						></input>
						<div className="navbar__image" />
					</div>
					<Link to="upload">
						<button className="navbar__button">UPLOAD</button>
					</Link>
				</form>
			</div>
		</>
	);
}

export default Navbar;
