import "../Video/Video.scss";
function Video(props) {
	return (
		<div className="video__section">
			<video className="video__size" poster={props.poster?.image}></video>
		</div>
	);
}

export default Video;
