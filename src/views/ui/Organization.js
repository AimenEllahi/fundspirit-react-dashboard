import React, { lazy, useEffect, useState } from "react";
import { Container, Row } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import { getNPOs } from "../../Actions/NPOs.js";
const OrgCard = lazy(() => import("../../components/dashboard/OrgCard.js"));

function Organization({ requests }) {
  const selector = useSelector((state) => state.NPOs);
  const [npos, setNpos] = useState([]);
  const [npoRequests, setNpoRequests] = useState([]);

  useEffect(() => {
    if (requests) {
      setNpoRequests(selector.npoRequests || []);
      console.log("Setting Requests");
    } else {
      setNpos(selector.npos);
    }
  }, []);

  return (
    <Container>
      <span
        className='fs-3'
        style={{
          fontWeight: "500",
        }}
      >
        {requests
          ? "Non-Profit Organization Requests"
          : " Non-Profit Organizations"}
      </span>
      <Row className='mt-5'>
        {requests
          ? npoRequests?.length === 0 && (
              <div
                style={{ color: "gray", height: "50vh" }}
                className='d-flex  fs-4 d-flex align-items-center justify-content-center '
              >
                {" "}
                <span>No Requests Found</span>{" "}
              </div>
            )
          : npos?.length === 0 && (
              <div
                style={{ color: "gray", height: "50vh" }}
                className='d-flex  fs-4 d-flex align-items-center justify-content-center '
              >
                {" "}
                <span>No Organizations Founds</span>{" "}
              </div>
            )}

        {requests
          ? npoRequests?.map((npo, index) => <OrgCard key={index} NPO={npo} />)
          : npos?.map((npo, index) => <OrgCard key={index} NPO={npo} />)}
      </Row>
    </Container>
  );
}

export default Organization;
