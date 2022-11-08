import "../../styles/Navbar.scss";

function Navbar() {
	return (
		<>
			<div className="navbar">
				<img
					classname="navbar__logo"
					alt=""
					src={require("../../assets/Logo/BrainFlix-logo.svg")}
				/>
				<h1 className="navbar__heading">BrainFlix</h1>
			</div>

			<div className="navbar__search">
				<input className="navbar__input" placeholder="Search"></input>
				<img
					className="navbar__image"
					alt=""
					src={require("../../assets/Images/Mohan-muruge.jpg")}
				/>
			</div>
			<button className="navbar__button">UPLOAD</button>
		</>
	);
}

export default Navbar;
