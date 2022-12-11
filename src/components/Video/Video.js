import "../Video/Video.scss";

function Video(props) {
	console.log(props.poster);
	return (
		<div className="video__section">
			<video className="video__size" poster={props.poster}></video>
		</div>
	);
}

export default Video;
