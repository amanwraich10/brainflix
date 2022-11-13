import "../Video/Video.scss";

function Video(props) {
	return (
		<>
			<video className="Video" poster={props.poster}></video>
		</>
	);
}

export default Video;
