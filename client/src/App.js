import { Route, Routes } from "react-router-dom";
import LoginPage from "./Pages/Authentication/LoginPage";
import SignupPage from "./Pages/Authentication/SignupPage";
import Player from "./Pages/Player";

function App() {
	return (
		<Routes>
			<Route path="/login" element={<LoginPage />} />
			<Route path="/signup" element={<SignupPage />} />
			<Route path="/" element={<Player />} />
			<Route path="*" element={<>Error 404 : Not Found</>} />
		</Routes>
	);
}

export default App;
