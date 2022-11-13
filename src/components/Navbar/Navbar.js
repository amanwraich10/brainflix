import "../../components/Navbar/Navbar.scss";

function Navbar() {
	const buttonHandler = (event) => {
		event.preventDefault();
		console.log(event.target);
	};
	return (
		<>
			<div className="navbar">
				<h1 className="navbar__logo"></h1>
			</div>

			<form onClick={buttonHandler}>
				<div className="navbar__search">
					<input
						className="navbar__input"
						type="text"
						placeholder="Search"
					></input>
					<p className="navbar__image" />
				</div>
				<button className="navbar__button">UPLOAD</button>
			</form>
		</>
	);
}

export default Navbar;
