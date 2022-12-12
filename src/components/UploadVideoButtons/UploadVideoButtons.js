import "../UploadVideoButtons/UploadVideoButtons.scss";

function UploadVideoButtons() {
	return (
		<>
			<hr className="uploadform__linebreak"></hr>
			<button className="uploadform__button--publish">PUBLISH</button>
			<button className="uploadform__button--cancel">CANCEL</button>
		</>
	);
}

export default UploadVideoButtons;
