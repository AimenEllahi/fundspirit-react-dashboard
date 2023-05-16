import React, { useEffect, useState } from "react";
import { Card, CardBody, CardTitle, CardSubtitle, Table } from "reactstrap";
import { useSelector } from "react-redux";
import { AiOutlineFundProjectionScreen, AiOutlineCalendar } from "react-icons/ai";
import "./index.css";

function CampaignTable() {
  const campaigns = useSelector((state) => state.Campaigns.campaigns);
  const [showRows, setShowRows] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowRows(true);
    }, 100);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <Card>
      <CardBody>
        <div className="d-flex justify-content-between">
          <div>
            <CardTitle tag="h5">Campaigns Listing</CardTitle>
            <CardSubtitle className="mb-2 text-muted" tag="h6">
              All Campaigns listed
            </CardSubtitle>
          </div>
        </div>

        <Table className="mt-3 align-middle" responsive borderless>
          <thead>
            <tr>
              <th>No</th>
              <th>Name</th>
              <th>
                <AiOutlineFundProjectionScreen size={20} className="m-1" />
                Total Funding
              </th>
              <th>
                <AiOutlineCalendar size={18} className="m-1" />
                Created At
              </th>
            </tr>
          </thead>
          <tbody>
            {campaigns?.map((campaign, index) => (
              <tr
                className={`border-top ${showRows ? "row-appear" : ""}`}
                key={index}
              >
                <td>{index + 1}</td>
                <td>
                  <div className="d-flex align-items-center p-2">
                    <h6 className="mb-0">{campaign.name}</h6>
                  </div>
                </td>
                <td>{campaign.totalFundings || 500} $</td>
                <td>{campaign.createdAt.substring(0, 10)}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </CardBody>
    </Card>
  );
}

export default CampaignTable;
