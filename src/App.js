import "./App.scss";
import Home from "./pages/Home/Home";
import Upload from "./pages/Upload/Upload";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />}></Route>
					<Route path="upload" element={<Upload />}></Route>
					<Route path="/video/:videoId" element={<Home />}></Route>
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
