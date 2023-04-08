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
      setNpoRequests(selector.npoRequests);
      console.log("Setting Requests");
    } else {
      setNpos(selector.npos);
    }
  });

  return (
    <Container>
      <Row>
        {requests
          ? npoRequests?.map((npo, index) => <OrgCard key={index} NPO={npo} />)
          : npos?.map((npo, index) => <OrgCard key={index} NPO={npo} />)}
      </Row>
    </Container>
  );
}

export default Organization;
