import Navbar from "../../components/Navbar/Navbar";
import Section from "../../components/Section/Section";
import CommentForm from "../../components/CommentForm/CommentForm";
import CommentList from "../../components/CommentList/CommentList";
import Video from "../../components/Video/Video";
import Data from "../../data/video-details.json";
import VideoList from "../../data/videos.json";
import NextVideo from "../../components/NextVideo/NextVideo";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function Home() {
	const [clickedvideo, setclickedvideo] = useState();
	const [videos, setvideos] = useState([]);
	const [apikey, setapikey] = useState(null);
	const { videoId } = useParams();
	const [videodetails, setvideodetails] = useState();

	useEffect(() => {
		function getApiKey() {
			return axios
				.get("https://project-2-api.herokuapp.com/register")
				.then((response) => {
					setapikey(response.data.api_key);

					return Promise.resolve(response.data.api_key);
				});
		}

		getApiKey().then((response) => {
			return getvideos(response);
		});

		function getvideos(apikey) {
			return axios
				.get(
					`https://project-2-api.herokuapp.com/videos?api_key=${apikey}`
				)
				.then((response) => {
					setvideos(response.data);
					setclickedvideo(response.data[0].image);
					console.log(response.data[0].image);
				});
		}
	}, []);

	useEffect(() => {
		axios
			.get(
				"https://project-2-api.herokuapp.com/videos/84e96018-4022-434e-80bf-000ce4cd12b8" +
					"?api_key=" +
					apikey
			)
			.then((response) => {
				setvideodetails(response.data);
			});
	}, [apikey, videoId]);

	return (
		<>
			<Navbar />
			<Video poster={clickedvideo} />
			<div className="components__flex">
				<div className="components__comments">
					<Section videodetails={videodetails} />
					<CommentForm />
					<CommentList commentList={videodetails} />
				</div>
				<NextVideo videos={videos} className="components__nextvideo" />
			</div>
		</>
	);
}

export default Home;
