//to craete card to view organizaions
import React from 'react'
import { Card, CardBody, CardTitle, CardText, CardImg, Button, Col} from "reactstrap";

function OrgCard() {
    return (
        <div>
           <Col md="3">
                    <Card className="org-card">
                        <img style={{
                            width: "50%",
                            height: "50%",
                            borderRadius: "50%",
                            margin: "auto",
                            display: "block",
                            marginTop: "30px",
                            marginBottom: "10px"
                        }} src="https://via.placeholder.com/150" alt="requester" className="org-card-logo"/>
                        <CardBody>
                            <div style={{
                                textAlign: "center"

                            }}
                             className="org-card-text">
                                <h5 className="org-card-name">Organization Name</h5>
                                <h6>Category</h6>
                                <h6>Email@gmail.com</h6>
                            </div>
                            <div style={{
                                textAlign: "center"
                            }}>
                                <Button style={{
                                    width: "80%",
                                    marginTop: "10px",
                                    marginBottom: "10px"
                                }} className="org-card-btn" color="primary">View</Button>
                            </div>

                        </CardBody>
                    </Card>
            </Col>
        </div>

  )
}

export default OrgCard;