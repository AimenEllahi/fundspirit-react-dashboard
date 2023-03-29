import React, {lazy} from 'react'
const OrgCard = lazy(() => import("../../components/dashboard/OrgCard.js"));

function Organization() {
  return (
    <OrgCard/>
  )
}

export default Organization