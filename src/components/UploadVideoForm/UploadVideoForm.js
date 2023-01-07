import "../UploadVideoForm/UploadVideoForm.scss";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function UploadVideoForm(props) {
	const [uploadvideo, setuploadvideo] = useState({});

	function uploadvideoinfo(e) {
		e.preventDefault();

		const uploadinfo = {
			image: "http://localhost:8080/images/image0.jpeg",
			title: uploadvideo.title,
			description: uploadvideo.description,
		};

		if (uploadinfo.title && uploadinfo.description) {
			axios
				.post("http://localhost:8080/videos/upload", uploadinfo)
				.then(alert("Upload Successful"));
		} else {
			alert("You must fill all areas.");
		}
	}
	function input(e) {
		e.preventDefault();
		let { name, value } = e.target;
		setuploadvideo((values) => ({ ...values, [name]: value }));
	}

	return (
		<div className="uploadform__form">
			<form>
				<div className="uploadform__top">
					<label className="uploadform__title--top">
						TITLE YOUR VIDEO
					</label>
					<input
						className="uploadform__input--top"
						placeholder="Add a title to your video"
						name="title"
						onChange={input}
					/>
				</div>

				<div className="uploadform__bottom">
					<label className="uploadform__title--bottom">
						ADD A VIDEO DESCRIPTION
					</label>
					<input
						className="uploadform__input--bottom"
						placeholder="Add a description to your video"
						name="description"
						onChange={input}
					/>
				</div>
			</form>

			<div className="">
				<hr className="uploadform__linebreak"></hr>
				<button className="uploadform__button--cancel">CANCEL</button>
				<Link to="/" className="uploadform__link">
					<button
						onClick={uploadvideoinfo}
						className="uploadform__button--publish"
					>
						PUBLISH
					</button>
				</Link>
			</div>
		</div>
	);
}

export default UploadVideoForm;
