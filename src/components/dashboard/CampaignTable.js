import React from 'react'
import {
    Card,
    CardBody,
    CardTitle,
    CardSubtitle,
    Table,
    Button,
  } from "reactstrap";

function CampaignTable() {
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
                        <tr className='border-top'>
                            <td>1</td>
                            <td>
                                <div className='d-flex align-items-center p-2'>
                                    <h6 className='mb-0'>Campaign 1</h6>
                                </div>
                            </td>
                            <td>1000</td>

                            <td>2021-09-09</td>
                        </tr>
                        <tr className='border-top'>
                            <td>2</td>
                            <td>
                                <div className='d-flex align-items-center p-2'>
                                    <h6 className='mb-0'>Campaign 2</h6>
                                </div>
                            </td>
                            <td>2000</td>

                            <td>2021-09-09</td>
                        </tr>

                    </tbody>
                </Table>
            </CardBody>
        </Card>
    </>
  )
}

export default CampaignTable