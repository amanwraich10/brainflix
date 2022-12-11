function UploadVideoForm() {
	return (
		<>
			<form>
				<label>
					TITLE YOUR VIDEO
					<input placeholder="Add a title to your video" />
				</label>
				<label>
					ADD A VIDEO DESCRIPTION
					<input placeholder="Add a description to your video" />
				</label>
				<button>PUBLISH</button>
				<button>CANCEL</button>
			</form>
		</>
	);
}

export default UploadVideoForm;
