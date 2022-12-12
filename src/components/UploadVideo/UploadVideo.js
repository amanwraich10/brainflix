import UploadVideoForm from "../UploadVideoForm/UploadVideoForm";
import UploadPhoto from "../../assets/Images/Upload-video-preview.jpg";
import UploadVideoButtons from "../UploadVideoButtons/UploadVideoButtons";
import "../UploadVideo/UploadVideo.scss";

function UploadVideo() {
	return (
		<>
			<hr className="uploadpage__linebreak"></hr>
			<h1 className="uploadpage__title">Upload Video</h1>
			<hr className="uploadpage__linebreak-desktop"></hr>
			<div className="uploadpage__flex">
				<div>
					<h3 className="uploadpage__sub-title">VIDEO THUMBNAIL</h3>
					<img className="uploadpage__image" src={UploadPhoto}></img>
				</div>

				<UploadVideoForm />
			</div>
			<UploadVideoButtons />
		</>
	);
}

export default UploadVideo;
