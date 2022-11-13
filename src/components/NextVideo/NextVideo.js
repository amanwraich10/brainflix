function NextVideo(props) {
	console.log(props);
	const clickHandler = (event) => {
		console.log(event.target);
	};
	return (
		<div>
			<p>Next Videos</p>
			{props.nv.map((video) => {
				return (
					<div key={video.id} onClick={clickHandler}>
						<img src={video.image} />
						<p>{video.title}</p>
						<p>{video.channel}</p>
					</div>
				);
			})}
		</div>
	);
}

export default NextVideo;
// onclick={()=>props.handleclickvideo(props.id)}
