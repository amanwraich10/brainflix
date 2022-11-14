import "../NextVideo/NextVideo.scss";

function NextVideo(props) {
	console.log(props);
	const clickHandler = (event) => {
		console.log(event.target);
	};
	return (
		<div>
			<p className="nextvideo__heading">NEXT VIDEOS</p>
			{props.nv.map((video) => {
				return (
					<div
						key={video.id}
						onClick={clickHandler}
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
// onclick={()=>props.handleclickvideo(props.id)}
