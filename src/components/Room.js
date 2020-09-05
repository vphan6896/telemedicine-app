import React, { useState, useEffect } from 'react';
import Video from 'twilio-video';
import Participant from './Participant';
import {Container, Row, Col} from 'react-bootstrap';

const Room = ({ roomName, token, handleLogout }) => {
  const [room, setRoom] = useState(null);
  const [participants, setParticipants] = useState([]);

  useEffect(() => {
    const participantConnected = participant => {
      setParticipants(prevParticipants => [...prevParticipants, participant]);
    };

    const participantDisconnected = participant => {
      setParticipants(prevParticipants =>
        prevParticipants.filter(p => p !== participant)
      );
    };

    Video.connect(token, {
      name: roomName
    }).then(room => {
      setRoom(room);
      room.on('participantConnected', participantConnected);
      room.on('participantDisconnected', participantDisconnected);
      room.participants.forEach(participantConnected);
    });

    return () => {
      setRoom(currentRoom => {
        if (currentRoom && currentRoom.localParticipant.state === 'connected') {
          currentRoom.localParticipant.tracks.forEach(function(trackPublication) {
            trackPublication.track.stop();
          });
          currentRoom.disconnect();
          return null;
        } else {
          return currentRoom;
        }
      });
    };
  }, [roomName, token]);

  const remoteParticipants = participants.map(participant => (
    <Participant key={participant.sid} participant={participant} />
  ));

  return (
    <div className="room">
      <h2>Room: {roomName}</h2>
      <button onClick={handleLogout}>Log out</button>

      <Container>
          <div className="btn-group-vertical">
          <button type="button" className="btn btn-secondary">Click here to Mute</button>
          <button type="button" className="btn btn-secondary">Click here to turn off camera</button>
          </div>
          <Row className={"local-participant justify-content-md-center"}>
            <Col>
                <div>
                    {room ? (
                        <Participant
                            key={room.localParticipant.sid}
                            participant={room.localParticipant}
                        />
                    ) : (
                        ''
                    )}
                </div>
            </Col>
            <Col>
                <div>{remoteParticipants[0]}</div>
            </Col>
          </Row>
      </Container>


    </div>
  );
};

export default Room;
