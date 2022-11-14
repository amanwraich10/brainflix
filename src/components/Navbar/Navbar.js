import "../../components/Navbar/Navbar.scss";

function Navbar() {
	const buttonHandler = (event) => {
		event.preventDefault();
		console.log(event.target);
	};
	return (
		<>
			<div className="navbar">
				<div className="navbar__logo"></div>

				<form onClick={buttonHandler} className="navabr__form">
					<div className="navbar__search">
						<input
							className="navbar__input"
							type="text"
							placeholder="Search"
						></input>
						<div className="navbar__image" />
					</div>
					<button className="navbar__button">UPLOAD</button>
				</form>
			</div>
		</>
	);
}

export default Navbar;
