import UploadVideoForm from "../UploadVideoForm/UploadVideoForm";
import UploadPhoto from "../../assets/Images/Upload-video-preview.jpg";
import "../UploadVideo/UploadVideo.scss";

function UploadVideo() {
	return (
		<>
			<hr></hr>
			<h1 className="uploadpage__title">Upload Video</h1>
			<h3 className="uploadpage__sub-title">VIDEO THUMBNAIL</h3>
			<img className="uploadpage__image" src={UploadPhoto}></img>
			<UploadVideoForm />
		</>
	);
}

export default UploadVideo;
