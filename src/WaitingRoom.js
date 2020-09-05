import React from 'react';
import './App.css';
import {Button, Form, Container} from 'react-bootstrap'
import styled from 'styled-components';

const Styles = styled.div`
    font-family: Times New Roman;
    font-size: 1.5em;
    text-align: center;
    color: black;
`;
const Style = styled.h1`
  font-size: 3.0em;
  text-align: center;
  color: black;
  background: #ffebcd;
  padding: 1.0em;
`;
const WaitingRoom = ({
  username,
  // roomName,
  handleUsernameChange,
  handleSubmit,
}) => {
  return(
  <Form onSubmit={handleSubmit}>
  <Style>
  <Form.Group>
    <Form.Label className="title-label">Waiting Room</Form.Label>
  </Form.Group>
  </Style>
  <br />
  <Styles>
  <Form.Group controlId="formName">
    <Form.Label className="normal-label">Name</Form.Label>
    <br />
    <Form.Control type="text" onChange={handleUsernameChange} value={username}/>
  </Form.Group>
  <br />
  {/* <Form.Group controlId="formRoomName">
    <Form.Label className="normal-label">Room Name</Form.Label>
    <br />
    <Form.Control type="text" />
  </Form.Group> */}
  <br />
  <Button variant="primary" type="submit" size="lg">
    Submit
  </Button>
  </Styles>
  </Form>
  
  );
  // return (
  //   <div>
  //       <h1>Enter a room</h1>
  //       <div>
  //         <label htmlFor="name">Name:</label>
  //       <input
  //         type="text"
  //         id="field"
  //         value={username}
  //         required
  //       />
  //       </div>
  //       <div>
  //       <label htmlFor="room">Room name:</label>
  //       <input
  //         type="text"
  //         id="room"
  //         value={roomName}
  //         required
  //       />
  //     </div>
  //     <button type="submit">Submit</button>
  //     </div>
  // );
};

export default WaitingRoom;
