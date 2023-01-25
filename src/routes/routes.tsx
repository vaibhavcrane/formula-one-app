import { Routes, Route } from "react-router-dom";
import { CurrentSeason } from "../pages/CurrentSeason";
import { Error404 } from "../pages/Error404";

export default function AppRouter() {
	return (
		<>
			<Routes>
				<Route
					path='*'
					element={<Error404 />}
				/>
				<Route
					path='/'
					element={<CurrentSeason />}
				/>
			</Routes>
		</>
	);
}
