import React from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link
} from 'react-router-dom';

import ConferenceRoom from './ConferenceRoom';
import WaitingRoom from './WaitingRoom';
import VideoChat from './components/VideoChat';

function App() {
	return (
		<div className="app">
			<header>
				<h1>Video Chat with Hooks</h1>
			</header>
			<main>
				<VideoChat />
			</main>
		</div>);	/*return (
		<Router>
			<Switch>
				<Route path="/wait">
					<WaitingRoom />
				</Route>
				<Route path="/video">
					<ConferenceRoom />
				</Route>
			</Switch>
		</Router>
	);*/
}

export default App;
