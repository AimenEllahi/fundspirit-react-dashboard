// to create form for creating campaigns
import React from 'react'
import {
    Form,
    FormGroup,
    Label,
    Input,
    Button,
    Row,
    Col,
 
} from "reactstrap"

function CreateForm() {
  return (
    <div>
        <h1>Create Campaign</h1>
        <Form>
            <Row>
                <Col md="8">
                    <FormGroup>
                        <Label for="campaignName">Campaign Name</Label>
                        <Input type="text" name="campaignName" id="campaignName" placeholder="Campaign Name" />
                    </FormGroup>
                </Col>
                <Col md="8">
                    <FormGroup>
                        <Label for="campaignDescription">Campaign Description</Label>
                        <Input type="text" name="campaignDescription" id="campaignDescription" placeholder="Campaign Description" />
                    </FormGroup>
                </Col>
                <Col md="8">
                    <FormGroup>
                        <Label for="campaignImage">Campaign Image</Label>
                        <Input type="file" name="campaignImage" id="campaignImage" placeholder="Campaign Image" />
                    </FormGroup>
                </Col>
            </Row>
        </Form>
    </div>
  )
}

export default CreateForm