import "../NextVideo/NextVideo.scss";
import { Link } from "react-router-dom";

function NextVideo(props) {
	const { videoid } = props;

	return (
		<div>
			<p className="nextvideo__heading">NEXT VIDEOS</p>
			{props.videos.map((video) => {
				return (
					video.id !== props.clickedvideo.id && (
						<Link
							to={`/video/${videoid}`}
							className="nextvideo__links"
						>
							<div
								to={video.id}
								key={video.id}
								className="nextvideo__section"
							>
								<img
									src={video.image}
									className="nextvideo__video"
								/>
								<div className="nextvideo__info">
									<p className="nextvideo__title">
										{video.title}
									</p>
									<p className="nextvideo__channel">
										{video.channel}
									</p>
								</div>
							</div>
						</Link>
					)
				);
			})}
		</div>
	);
}

export default NextVideo;
