import "../styles/main.scss";
import { QueryClientProvider } from "@tanstack/react-query";
import queryClient from "../lib/query";
import { SeasonContextProvider } from "../contexts/SeasonContext";
import { BrowserRouter as Router } from "react-router-dom";
import AppRouter from "../routes/routes";

function AppProvider() {
	return (
		<div>
			<SeasonContextProvider>
				<QueryClientProvider client={queryClient}>
					<Router>
						<AppRouter />
					</Router>
				</QueryClientProvider>
			</SeasonContextProvider>
		</div>
	);
}

export default AppProvider;
