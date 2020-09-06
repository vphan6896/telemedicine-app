import React, {useState, useEffect} from 'react';
import Video from 'twilio-video';
import Participant from './Participant';
import {Container, Row, Col, Modal, Button, ButtonGroup} from 'react-bootstrap';
import ReactPlayer from "react-player";

function ModalInstr() {
    const [show, setShow] = useState(true);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            
            <Modal onHide={handleClose} size={"lg"} show={show}>
                <Modal.Title>
                    How to enable webcam and microphone
                </Modal.Title>
                <Modal.Body>
                    <ReactPlayer playing={true} url={"https://youtu.be/guv6kkVcxdU?t=25"}></ReactPlayer>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        My webcam and microphone are good!
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

const Room = ({roomName, token, handleLogout}) => {
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
                    currentRoom.localParticipant.tracks.forEach(function (trackPublication) {
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
        <Participant key={participant.sid} participant={participant}/>
    ));

    return (
        <div className="room">
            <ModalInstr/>

            <br/>
            <br/>
            <h2>Room: {roomName}</h2>
                <style type="text/css">
                    {`
                        .btn-styled {
                          background-color: darkslateblue;
                          color: white;
                          margin: 1em;
                          font-family: Roboto;
                          font-size: 1.25em;
                        }
                    `}
                </style>
            <Container>
                <ButtonGroup vertical>
                    <Button variant="styled">Click this button to mute</Button>
                    <Button variant="styled">Click this button to turn off camera</Button>
                    <Button onClick={handleLogout} variant="styled">Log out</Button>
                </ButtonGroup>

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
