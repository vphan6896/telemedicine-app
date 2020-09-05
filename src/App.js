import React from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link
} from 'react-router-dom';
import WaitingRoom from './WaitingRoom';
import VideoChat from './components/VideoChat';

function App() {
	return (
		<div className="app">
			<main>
				<VideoChat />
			</main>
		</div>);
}

export default App;
