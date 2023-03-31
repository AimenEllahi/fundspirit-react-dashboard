import React, {lazy} from 'react'

const RequestForm = lazy(() => import("../../components/dashboard/RequestForm.js"));

function OrgRequests() {
  return (
    <RequestForm />
  )
}

export default OrgRequests