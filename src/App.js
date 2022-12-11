import "./App.scss";
import Home from "./pages/Home/Home";
import Upload from "./pages/Upload/Upload";
import VideoPlayer from "./pages/VideoPlayer/VideoPlayer";
import { useParams } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
	const { videoId } = useParams();
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />}></Route>
					<Route path="upload" element={<Upload />}></Route>
					<Route
						path="/video/:videoId"
						element={<VideoPlayer />}
					></Route>
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
