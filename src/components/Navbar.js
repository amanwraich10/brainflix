import "../components/Navbar.scss";

function Navbar() {
	return (
		<>
			<div className="navbar">
				<img
					classname="navbar__logo"
					src={require("../assets/Logo/BrainFlix-logo.svg")}
				/>
				<h1 className="navbar__heading">Brainflix</h1>
			</div>

			<div className="navbar__search">
				<input className="navbar__input" placeholder="Search"></input>
				<img
					className="navbar__image"
					src={require("../assets/Images/Mohan-muruge.jpg")}
				/>
			</div>
			<button className="navbar__button">UPLOAD</button>
		</>
	);
}

export default Navbar;
