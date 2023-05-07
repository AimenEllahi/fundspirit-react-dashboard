import React, { useEffect, useState } from "react";
import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  Table,
  Button,
} from "reactstrap";
import { useSelector } from "react-redux";

function CampaignTable() {
  const campaigns = useSelector((state) => state.Campaigns.campaigns);
  console.log(campaigns);
  return (
    <>
      <Card>
        <CardBody>
          <div className='d-flex justify-content-between'>
            <div>
              <CardTitle tag='h5'>Campaigns Listing</CardTitle>{" "}
              <CardSubtitle className='mb-2 text-muted' tag='h6'>
                All Campaigns listed
              </CardSubtitle>
            </div>
          </div>

          <Table className='mt-3 align-middle' responsive borderless>
            <thead>
              <tr>
                <th>No</th>
                <th>Name</th>
                <th>Total Funding</th>
                <th>Created At</th>
              </tr>
            </thead>
            <tbody>
              {campaigns?.map((campaign, index) => (
                <tr className='border-top' key={index}>
                  <td>{index + 1}</td>
                  <td>
                    <div className='d-flex align-items-center p-2'>
                      <h6 className='mb-0'>{campaign.name}</h6>
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
    </>
  );
}

export default CampaignTable;
