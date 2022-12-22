import "../UploadVideoButtons/UploadVideoButtons.scss";
import { Link } from "react-router-dom";

function UploadVideoButtons() {
	return (
		<>
			<hr className="uploadform__linebreak"></hr>
			<Link to="/">
				<button className="uploadform__button--publish">PUBLISH</button>
			</Link>

			<button className="uploadform__button--cancel">CANCEL</button>
		</>
	);
}

export default UploadVideoButtons;
