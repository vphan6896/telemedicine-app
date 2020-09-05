import React, { useState, useCallback } from 'react';

import WaitingRoom from '../WaitingRoom';
import Room from './Room';

const VideoChat = () => {
	const [username, setUsername] = useState('');
	const [room, setRoom] = useState("room");
	const [token, setToken] = useState(null);

	const handleUsernameChange = useCallback(event => {
		setUsername(event.target.value);
	}, []);

	const handleSubmit = useCallback(async event => {
		event.preventDefault();
		const data = await fetch("/video/token", {
			method: "POST",
			body: JSON.stringify({
				identity: username,
				room: room
			}),
			headers: {
				"Content-Type": "application/json"
			}
		}).then(res => res.json());
		setToken(data.token);
	}, [username, room]);

	const handleLogout = useCallback(event => {
		setToken(null);
	}, []);

	let render;
	if (token) {
		render = (
			<div>
				<Room roomName="room" token={token} handleLogout={handleLogout} />
			</div>
		);
	} else {
		render = (
			<WaitingRoom
				username={username}
				handleUsernameChange={handleUsernameChange}
				handleSubmit={handleSubmit}
			/>
		);
	}
	return render;
};

export default VideoChat;
