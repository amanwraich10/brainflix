import "./App.scss";
import Navbar from "./components/Navbar/Navbar";
import Section from "./components/Section/Section";
import CommentForm from "./components/CommentForm/CommentForm";
import CommentList from "./components/CommentList/CommentList";
import Video from "./components/Video/Video";
import Data from "../src/data/video-details.json";
import VideoList from "./data/videos.json";
import NextVideo from "./components/NextVideo/NextVideo";

function App() {
	const videoDetails = Data[0];
	const NextVideos = VideoList;
	return (
		<>
			<Navbar />
			<Video poster={videoDetails.image} />

			<div className="components__flex">
				<div className="components__comments">
					<Section videos={videoDetails} />
					<CommentForm />
					<CommentList comments={videoDetails.comments} />
				</div>
				<NextVideo nv={NextVideos} className="components__nextvideo" />
			</div>
			{/* handleclickvide={handleclickvideo} */}
		</>
	);
}

export default App;
