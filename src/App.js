import "./App.scss";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />}></Route>
					<Route path="" element=""></Route>
					<Route path="" element=""></Route>
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
