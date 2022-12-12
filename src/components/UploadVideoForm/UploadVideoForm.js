import "../UploadVideoForm/UploadVideoForm.scss";

function UploadVideoForm() {
	return (
		<>
			<form>
				<div className="uploadform__top">
					<label className="uploadform__title--top">
						TITLE YOUR VIDEO
					</label>
					<input
						className="uploadform__input--top"
						placeholder="Add a title to your video"
					/>
				</div>

				<div className="uploadform__bottom">
					<label className="uploadform__title--bottom">
						ADD A VIDEO DESCRIPTION
					</label>
					<input
						className="uploadform__input--bottom"
						placeholder="Add a description to your video"
					/>
				</div>
			</form>
		</>
	);
}

export default UploadVideoForm;
