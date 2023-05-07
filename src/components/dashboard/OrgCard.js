//to craete card to view organizaions
import React from "react";
import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  CardImg,
  Button,
  Col,
  Row,
} from "reactstrap";
import { useNavigate } from "react-router-dom";
function OrgCard({ NPO }) {
  const navigate = useNavigate();
  //navigation to npo/request
  const viewOrg = () => {
    navigate("/npos/request/" + NPO._id);
  };

  return (
    <Col md='3'>
      
      <Card className='org-card'>
        <img
          style={{
            width: "50%",
            height: "50%",
            borderRadius: "50%",
            margin: "auto",
            display: "block",
            marginTop: "30px",
            marginBottom: "10px",
          }}
          src='https://via.placeholder.com/150'
          alt='requester'
          className='org-card-logo'
        />
  
        <CardBody>
          <div
            style={{
              textAlign: "center",
            }}
            className='org-card-text'
          >
            <h5 className='org-card-name'>{NPO.name}</h5>
            <h6>{NPO.category}</h6>
            <h6>{NPO.email}</h6>
          </div>
          <div
            style={{
              textAlign: "center",
            }}
          >
            <Button
              onClick={viewOrg}
              style={{
                width: "80%",
                marginTop: "10px",
                marginBottom: "10px",
              }}
              className='org-card-btn'
              color='primary'
            >
              View
            </Button>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
}

export default OrgCard;
