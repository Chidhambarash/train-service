import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import trainSearch from "../helpers/trainSearch";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import priceCalculator from "../helpers/priceCalculator";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { updateTrainName } from "../redux/actions";
import Stack from "react-bootstrap/Stack";
import departureTime from '../helpers/utility '

const ResultContainer = () => {
  const pickUp = useSelector((state) => state.inputs.boardingSpot);
  const dropOut = useSelector((state) => state.inputs.destinationSpot);
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();
  const handleClose = () => setShow(false);
  const trainName = useSelector((state) => state.inputs.trainName);
  const handleShow = (train) => {
    setShow(true);
    dispatch(updateTrainName(train));
  };
  let trainOutput = [];
  trainOutput = trainSearch(pickUp, dropOut);
  if (pickUp !== "" && dropOut !== "" && trainOutput.length !== 0) {
    return (
      <div className="child">
        <Container fluid="xl" style={{ height: "70vh" }}>
          {trainOutput.map((item) => (
            <Row xs={2} md={4} style={{ marginLeft: "10%" }}>
              <Card border="danger" style={{ width: "80%", margin: "2px" }}>
                <Card.Body>
                  <Card.Header style={{ marginTop: "20px" }}>
                    {item}
                  </Card.Header>
                  <Stack
                    direction="horizontal"
                    gap={3}
                    style={{ margin: "10px" }}
                  >
                    <Card.Title className="me-auto">{pickUp} - {dropOut}   |  {departureTime(item,pickUp)} </Card.Title>
                    <Button variant="danger" onClick={() => handleShow(item)}>
                      BOOK
                    </Button>
                  </Stack>
                </Card.Body>
              </Card>
            </Row>
          ))}
        </Container>
        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title>Ticket Confirmation - {trainName}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Boarding Point - {pickUp} <br />
            Destination - {dropOut} <br />
            Ticket Fare - {priceCalculator(trainName, pickUp, dropOut)}/- <br />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="danger">Confirm</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  } else if (pickUp === "Boarding Point" && dropOut === "Destination") {
    return (
      <div className="resultContainer">
        <Card
          border="danger"
          style={{
            width: "30rem",
            height: "5rem",
            justifyContent: "center",
            opacity: "0.5",
            textAlign: "center",
          }}
          className="text-center"
        >
          <Card.Body>
            <Card.Text>Enter Boarding Point and Destination</Card.Text>
          </Card.Body>
        </Card>
      </div>
    );
  } else {
    return (
      <div className="resultContainer">
        <Card
          border="danger"
          style={{ width: "30rem", height: "5rem", justifyContent: "center" }}
          className="text-center"
        >
          <Card.Body>
            <Card.Text>No trains available right now in this route</Card.Text>
          </Card.Body>
        </Card>
      </div>
    );
  }
};
export default ResultContainer;
