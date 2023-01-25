import { Routes, Route } from "react-router-dom";
import { CurrentSeason } from "../pages/CurrentSeason";

export default function AppRouter() {
	return (
		<>
			<Routes>
				<Route
					path='/'
					element={<CurrentSeason />}
				/>
			</Routes>
		</>
	);
}
