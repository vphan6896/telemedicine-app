import React from 'react';
import './App.css';
import {Button, Form, Container} from 'react-bootstrap'
import styled from 'styled-components';
import Helmet from 'react-helmet';


const Styles = styled.div`
    font-family: Roboto;
    font-size: 1.75em;
    text-align: center;
    color: black;
    padding:0.15em;
`;
const Style = styled.h1`
  font-size: 3.0em;
  text-align: center;
  color: white;
  font-family: Roboto;
  background: darkslateblue;
  padding: 0.5em;
`;


const Button1 = styled.button`
  font-size: 0.75em;
  text-align: center;
  color: black;
  font-family: Roboto;
  background: white;
  padding: 0.25em 0.5em;
  border: 2px solid darkslateblue;
`;



const WaitingRoom = ({
  username,
  // roomName,
  handleUsernameChange,
  handleSubmit,
}) => {
  return(
  <Form onSubmit={handleSubmit}>
    <br/>
    <br/>
  <Helmet bodyAttributes={{style: 'background-color : mintcream'}}/>
  <Style>

  <Form.Group>
    <Form.Label className="title-label">Waiting Room</Form.Label>
  </Form.Group>
  </Style>
  <br />
  <Styles>
  <Form.Group controlId="formName">
    <Form.Label>Name</Form.Label>
    <br />
    <Form.Control type="text" onChange={handleUsernameChange} value={username}/>
  </Form.Group>

  {/* <Form.Group controlId="formRoomName">
    <Form.Label className="normal-label">Room Name</Form.Label>
    <br />
    <Form.Control type="text" />
  </Form.Group> */}
  <br />
    <Button1>
      Submit
    </Button1>
    </Styles>
  <h2 style={{textAlign:"center",fontFamily:"Roboto", lineHeight:"1.75em"}}>
    Incoming appointment with Dr. Jimmy
  </h2>

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
