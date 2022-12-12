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
import { Outlet, useParams } from "react-router-dom";

function Home() {
	const [clickedvideo, setclickedvideo] = useState();
	const [videos, setvideos] = useState([]);
	const [apikey, setapikey] = useState(null);
	const { videoId } = useParams();

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

					console.log(response.data);
				});
		}
	}, []);

	useEffect(() => {
		axios
			.get(
				"https://project-2-api.herokuapp.com/videos/84e96018-4022-434e-80bf-000ce4cd12b8" +
					// { videoId } +
					"?api_key=" +
					apikey
			)
			.then((response) => {
				setclickedvideo(response.data);
			})
			.catch((err) => {
				console.log(err.response);
			});
	}, [apikey]);

	return (
		<>
			<Navbar />
			<Video poster={clickedvideo} clickedvideo={clickedvideo} />
			<div className="components__flex">
				<div className="components__comments">
					<Section videodetails={clickedvideo} />
					<CommentForm />
					<CommentList commentList={clickedvideo} />
				</div>
				<NextVideo
					videos={videos}
					clickedvideo={clickedvideo}
					className="components__nextvideo"
				/>
			</div>
		</>
	);
}

export default Home;
