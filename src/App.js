import "./App.scss";
import Navbar from "./components/Navbar/Navbar";
import Section from "./components/Section/Section";
import CommentForm from "./components/CommentForm/CommentForm";
import CommentList from "./components/CommentList/CommentList";
import Video from "./components/Video/Video";
import Data from "../src/data/video-details.json";
import VideoList from "./data/videos.json";
import NextVideo from "./components/NextVideo/NextVideo";
import VideoDescription from "./components/VideoDescription/VideoDescription";

function App() {
	const videoDetails = Data[0];
	const NextVideos = VideoList;
	return (
		<>
			<Navbar />
			<Video poster={videoDetails.image} />
			<VideoDescription />
			<Section videos={videoDetails} />
			<CommentForm />
			<CommentList comments={videoDetails.comments} />
			<NextVideo nv={NextVideos} />
			{/* handleclickvide={handleclickvideo} */}
		</>
	);
}

export default App;
