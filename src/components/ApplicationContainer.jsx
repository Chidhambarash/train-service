import "../App.css";
import React, { useState } from "react";
import Stack from "react-bootstrap/Stack";
import DropdownButton from "react-bootstrap/DropdownButton";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import Dropdown from "react-bootstrap/Dropdown";
import boardingStation from "../data/boardingStation";
import dropStation from "../data/dropStation";
import {useDispatch} from 'react-redux';
import {updateBoarding,updateDestination} from '../redux/actions';

const ApplicationContainer = () => {
  const [boardingPoint, setBoardingPoint] = useState("Boarding Point");
  const [dropPoint, setDropPoint] = useState("Destination");
  const dispatch=useDispatch();
  const handleBoardingPoint = (evt) => {
    setBoardingPoint(evt)
    
  };
  const handleDropPoint = (evt) => {
    setDropPoint(evt);
  };
  const handleSubmit = () => {
    if(boardingPoint!==dropPoint){
        dispatch(updateBoarding(boardingPoint));
        dispatch(updateDestination(dropPoint));
    }
    else{
        alert("duplicate values entered")
        setDropPoint("Destination");
        setBoardingPoint("Boarding Point")

        dispatch(updateBoarding("Boarding Point"));
        dispatch(updateDestination("Destination"));
    }
    };

  return (
    <div className="child">
        <div className="form">
        <Stack direction="horizontal" gap={3} className="col-md-8 mx-auto" style={{marginLeft:"100px"}}>
          <DropdownButton
            id="dropdown-basic-button"
            variant="outline-danger"
            title={boardingPoint}
            style={{marginLeft:"10px"}}
          >
            {boardingStation.map((item) => (
              <Dropdown.Item
                key={item.code}
                onClick={() => handleBoardingPoint(item.name)}
              >
                {item.name}
              </Dropdown.Item>
            ))}
          </DropdownButton>
          <DropdownButton
            id="dropdown-basic-button"
            variant="outline-danger"
            title={dropPoint}
            flip
          >
            {dropStation.map((item) => (
              <Dropdown.Item
                key={item.code}
                onClick={() => handleDropPoint(item.name)}
                flip
              >
                {item.name}
              </Dropdown.Item>
            ))}
          </DropdownButton>
          <div className="vr" />
          <Button
            type="submit"
            variant="outline-danger"
            onClick={()=>handleSubmit()}
            style={{backgroundColor:"##F5D0DE"}}
          >
            Submit
          </Button>
        </Stack>
        </div>
    </div>
  );
};
export default ApplicationContainer;
