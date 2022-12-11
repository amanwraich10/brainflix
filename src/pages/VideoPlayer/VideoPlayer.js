import Navbar from "../../components/Navbar/Navbar";
import { useParams } from "react-router-dom";
import VideoList from "../../data/videos.json";

function VideoPlayer(props) {
	const { videoId } = useParams();
	// console.log(params);
	// const videoId = params.videoId;
	// console.log(VideoList);
	// const clickedVideo = VideoList.find((video) => {
	// 	video.id === videoId;
	// });
	console.log(videoId);
	return (
		<>
			{/* <Navbar /> */}
			{/* {params.videoId} */}
			<div>video stuff: {videoId.id}</div>
		</>
	);
}

export default VideoPlayer;
