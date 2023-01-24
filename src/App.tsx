import "./styles/main.scss";

import AppProvider from "./providers/providers";
import { Navbar } from "./components";

function App() {
	return (
		<div className='App'>
			<Navbar />
			<AppProvider />
		</div>
	);
}

export default App;
