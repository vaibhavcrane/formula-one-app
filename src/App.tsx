import "./styles/main.scss";

import AppProvider from "./providers/providers";

function App() {
	//TODO: Add theme toggle
	return (
		<div className='App dark'>
			<AppProvider />
		</div>
	);
}

export default App;
