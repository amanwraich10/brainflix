import "./App.scss";
import Navbar from "./components/Navbar/Navbar";
import Section from "./components/Section/Section";
import CommentForm from "./components/CommentForm/CommentForm";
import CommentList from "./components/CommentList/CommentList";
import Video from "./components/Video/Video";
import Data from "../src/data/video-details.json";
import VideoList from "./data/videos.json";
import NextVideo from "./components/NextVideo/NextVideo";
import { useState } from "react";

function App() {
	const videoDetails = Data[0];
	const NextVideos = VideoList;
	// console.log(videoDetails[0]);

	//videos_nextvideos
	const nextVideoList = Data.map((vid) => {
		return {
			id: vid.id,
			image: vid.image,
			title: vid.title,
			channel: vid.channel,
		};
	});
	const [activeVideo, setactiveVideo] = useState(Data[0]);
	const default_nextVideo = nextVideoList.filter(function (newVideo) {
		return newVideo.id !== Data[0].id;
	});

	const [nextVideo, setnextVideo] = useState(default_nextVideo);

	const clickVideo = (video) => {
		const newActiveVideo = Data.find(function (e) {
			return e.id === video.id;
		});

		setactiveVideo(newActiveVideo);

		const newNextVideo = nextVideoList.filter(function (e) {
			return e.id !== video.id;
		});

		setnextVideo(newNextVideo);
	};

	const length = activeVideo.comments.length;
	return (
		<>
			<Navbar />
			<Video poster={videoDetails.image} activeVideo={activeVideo} />

			<div className="components__flex">
				<div className="components__comments">
					<Section videos={videoDetails} activeVideo={activeVideo} />
					<CommentForm length={activeVideo.comments.length} />
					<CommentList comments={activeVideo.comments} />
				</div>
				<NextVideo
					clickVideo={clickVideo}
					nextVideo={nextVideo}
					nextvideo={NextVideos}
					className="components__nextvideo"
				/>
			</div>
			{/* handleclickvide={handleclickvideo} */}
		</>
	);
}

export default App;
