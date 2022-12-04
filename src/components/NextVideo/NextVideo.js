import Axios from "axios";
import { useState } from "react";
import "../NextVideo/NextVideo.scss";

function NextVideo(props) {
	// const [video, setvideo] = useState("");

	// let apiKey = "";

	// function getApiKey() {
	// 	if ((apiKey = "")) {
	// 		return Axios.get(
	// 			"https://project-2-api.herokuapp.com/register"
	// 		).then((response) => {
	// 			apiKey = response.data.api_key;
	// 			console.log(Promise.resolve(apiKey));
	// 			// return Promise.resolve(apiKey);
	// 		});
	// 	} else {
	// 		console.log(Promise.resolve(apiKey));
	// 		// return Promise.resolve(apiKey);
	// 	}
	// }

	// function postvideo(apiKey) {
	// 	Axios.get(
	// 		`https://project-2-api.herokuapp.com/videos?api_key=${apiKey}`
	// 	)
	// 		.then((response) => {
	// 			console.log(response.data[0].title);
	// 			setvideo(response.data[0].title);
	// 		})
	// 		.catch((err) => {
	// 			console.log(err.response);
	// 		});
	// }

	return (
		<div>
			<p className="nextvideo__heading">NEXT VIDEOS</p>
			{props.nextVideo.map((video) => {
				return (
					<div
						key={video.id}
						onClick={(event) => {
							props.clickVideo(video);
						}}
						className="nextvideo__section"
					>
						<img src={video.image} className="nextvideo__video" />
						<div className="nextvideo__info">
							<p className="nextvideo__title">{video.title}</p>
							<p className="nextvideo__channel">
								{video.channel}
							</p>
						</div>
					</div>
				);
			})}
		</div>
	);
}

export default NextVideo;
