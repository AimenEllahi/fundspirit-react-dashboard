import React from 'react'
import { Button, Row, Col } from "reactstrap";
//to import css
import './index.css'

function RequestForm() {
  return (
    <div>
        <div fluid className="heading-container">
            <img src="https://via.placeholder.com/150" alt="requester" className="heading-logo"/>
            <h3 className='req-detail-heading' >Organization Name</h3>
        </div>
        <Row>
            <Col md="6">
                <div className="req-detail-container">
                    <img src="https://via.placeholder.com/150" alt="requester" className="req-detail-logo"/>
                    <h5 className='req-detail-text' >Requested By</h5>
                    <h6 className='req-detail-text' >Name</h6>
                    <p className='req-detail-text req-detail-text-info'>Hanan Munir</p>
                    <h6 className='req-detail-text' >Email</h6>
                    <p className='req-detail-text req-detail-text-info'>hanan@gmail.com</p>
                    <h6 className='req-detail-text' >Phone</h6>
                    <p className='req-detail-text req-detail-text-info'>+92 345 678 9012</p>

                    <div className='ord-req-btns' >
                        <Button style={{
                            marginRight: "10px"
                        }}  className="req-detail-btn" color="primary">Approve</Button>
                        <Button className="req-detail-btn" color="danger">Reject</Button>
                    </div>
                </div>
                
            </Col>
            <Col md="6">
                <div className="org-detail-container">
                    <h5 className='org-detail-text-heading' >Organization Details</h5>
                    <h6 className='org-detail-text' >Backdrop</h6>
                    <img style={{
                        borderRadius: "5px",
                    }} src="https://via.placeholder.com/150" alt="requester" className="org-detail-backdrop"/>  
                    {/*info about organization */}
                    <h6 className='org-detail-text' >Description</h6>
                    <p className='org-detail-text org-detail-text-info'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc vel tincidunt lacinia, nisl nisl aliquet nunc, eget aliquam nisl nisl et nisl.
                     Sed euismod, nunc vel tincidunt lacinia, nisl nisl aliquet nunc, eget aliquam nisl nisl et nisl.</p>
                    <h6 className='org-detail-text' >Address</h6>
                    <p className='org-detail-text org-detail-text-info'>Lorem ipsum dolor sit amet, </p>
                    <h6 className='org-detail-text' >SECP</h6>
                    <p className='org-detail-text org-detail-text-info'>AH72974NK-HUS2</p>
                    <h6 className='org-detail-text' >Category</h6>
                    <p className='org-detail-text org-detail-text-info'>Lorem ipsum dolor sit amet,</p>
                    <h6 className='org-detail-text' >Website</h6>
                    <p className='org-detail-text org-detail-text-info'>www.organization.com</p>

                </div>
            </Col>
            </Row>                  
    </div>
  )
}

export default RequestForm