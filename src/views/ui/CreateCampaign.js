import React,{lazy} from 'react'
const CreateForm = lazy(() => import("../../components/dashboard/CreateForm.js"));
function CreateCampaign() {
  return (
    <CreateForm />
  )
}

export default CreateCampaign