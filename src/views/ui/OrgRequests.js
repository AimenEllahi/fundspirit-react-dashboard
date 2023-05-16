import React, { lazy, useEffect, useState } from "react";
import { fetchNPORequests } from "../../api/index.js";
const RequestForm = lazy(() =>
  import("../../components/dashboard/RequestForm.js")
);

function OrgRequests() {
  return <RequestForm />;
}

export default OrgRequests;
