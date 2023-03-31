import React, {lazy} from 'react'
import { Row} from "reactstrap";
const OrgCard = lazy(() => import("../../components/dashboard/OrgCard.js"));

function Organization() {
  return (
   <Row classname="d-flex">
      <OrgCard />
      <OrgCard />
      <OrgCard />
      <OrgCard />
      <OrgCard />
      <OrgCard />
      <OrgCard />
      <OrgCard />
    </Row>  
  )
}

export default Organization