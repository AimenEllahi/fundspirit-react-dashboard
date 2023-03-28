import React,{lazy} from 'react'
const CreateForm = lazy(() => import("../../components/dashboard/CampaignForm.js"));
function CreateCampaign() {
  return (
    <CreateForm />
  )
}

export default CreateCampaign