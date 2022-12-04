import "../Video/Video.scss";

function Video(props) {
	// let apiKey = "";

	// function getApiKey() {
	// 	if ((apiKey = "")) {
	// 		return Axios.get(
	// 			"https://project-2-api.herokuapp.com//register"
	// 		).then((response) => {
	// 			apiKey = response.data.api_key;
	// 			return Promise.resolve(apiKey);
	// 		});
	// 	} else {
	// 		return Promise.resolve(apiKey);
	// 	}
	// }
	// getApiKey().then(apiKey);
	return (
		<div className="video__section">
			<video
				className="video__size"
				poster={props.activeVideo.image}
			></video>
		</div>
	);
}

export default Video;

// return (
// 	<div className="video__section">
// 		<video
// 			className="video__size"
// 			poster={props.activeVideo.image}
// 		></video>
// 	</div>
// );
