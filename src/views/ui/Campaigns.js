import React, {lazy} from 'react'

const CampaignTable = lazy(() => import("../../components/dashboard/CampaignTable.js"));

function Campaigns() {
  return (
    <CampaignTable />
  )
}

export default Campaigns