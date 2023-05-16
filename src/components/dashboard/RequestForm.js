import React, { useEffect, useState } from "react";
import { Button, Row, Col } from "reactstrap";
import "./index.css";
import { useParams } from "react-router-dom";
import { fetchNPO, approveNPO } from "../../api";
import { toast } from "react-toastify";

function RequestForm() {
  const { id } = useParams();
  const [NPO, setNPO] = useState();

  useEffect(() => {
    fetchNPO(id).then((res) => {
      setNPO(res.data);
    });
  }, []);
  const approve = () => {
    approveNPO(id)
      .then((res) => {
        toast("NPO Approved", {
          type: "success",
        });
      })
      .catch((err) => {
        toast("Error While Approving ", {
          type: "error",
        });
      });
  };
  return (
    <div>
      <div fluid className='heading-container'>
        <img
          src='/Images/Logo/sk.png'
          alt='requester'
          className='heading-logo'
        />
        <h3 className='req-detail-heading'>{NPO?.name}</h3>
      </div>
      <Row>
        <Col md='6'>
          <div className='req-detail-container'>
            <img
              src='/Images/shaukatk.png'
              alt='requester'
              className='req-detail-logo'
            />
            <h5 className='req-detail-text'>Personal Info</h5>
            <h6 className='req-detail-text'>CEO</h6>
            <p className='req-detail-text req-detail-text-info'>
              {NPO?.ceoName}
            </p>
            <h6 className='req-detail-text'>CEO Email</h6>
            <p className='req-detail-text req-detail-text-info'>
              {NPO?.ceoEmail}
            </p>
            <h6 className='req-detail-text'>CEO Phone</h6>
            <p className='req-detail-text req-detail-text-info'>
              {NPO?.ceoPhone}
            </p>
            <h6 className='req-detail-text'>Requested By</h6>
            <p className='req-detail-text req-detail-text-info'>
              {NPO?.requestedBy}
            </p>

            {!NPO?.isApproved && (
              <div className='ord-req-btns'>
                <Button
                  style={{
                    marginRight: "10px",
                  }}
                  className='req-detail-btn'
                  color='primary'
                  onClick={approve}
                >
                  Approve
                </Button>
                <Button className='req-detail-btn' color='danger'>
                  Reject
                </Button>
              </div>
            )}
          </div>
        </Col>
        <Col md='6'>
          <div className='org-detail-container'>
            <h5 className='org-detail-text-heading'>Organization Details</h5>
            <h6 className='org-detail-text'>SECP</h6>
            <p className='org-detail-text org-detail-text-info'>
              {NPO?.secp.toUpperCase()}
            </p>
            <h6 className='org-detail-text'>Category</h6>
            <p className='org-detail-text org-detail-text-info'>
              {NPO?.category}
            </p>
            <h6 className='org-detail-text'>Website</h6>
            <p className='org-detail-text org-detail-text-info'>
              {NPO?.website}
            </p>
            <h6 className='org-detail-text'>Address</h6>
            <p className='org-detail-text org-detail-text-info'>
              {NPO?.address}
            </p>
            <h6 className='org-detail-text'>Goals</h6>
            <p className='org-detail-text org-detail-text-info'>{NPO?.goals}</p>
            <h6 className='org-detail-text'>Description</h6>
            <p className='org-detail-text org-detail-text-info'>
              {NPO?.description}
            </p>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default RequestForm;
