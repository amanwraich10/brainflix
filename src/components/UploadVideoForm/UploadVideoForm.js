function UploadVideoForm() {
	return (
		<>
			<form>
				<label className="uploadform__title--top">
					TITLE YOUR VIDEO
					<input placeholder="Add a title to your video" />
				</label>
				<label className="uploadform__title--bottom">
					ADD A VIDEO DESCRIPTION
					<input placeholder="Add a description to your video" />
				</label>
				<button className="uploadform__button--publish">PUBLISH</button>
				<button className="uploadform__button--cancel">CANCEL</button>
			</form>
		</>
	);
}

export default UploadVideoForm;
