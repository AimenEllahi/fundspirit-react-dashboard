// to create form for creating campaigns
import React, { useState } from "react";
import { Form, FormGroup, Label, Input, Button, Row, Col } from "reactstrap";
import { createCampaign } from "../../api";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { getCampaigns } from "../../Actions/Campaigns";
const initialState = {
  name: "",
  description: "",
  image: "",
  subtitle: "",
  tags: [],
  goals: "",
};

function CampaignForm() {
  const [formData, setFormData] = useState(initialState);
  const dispatch = useDispatch();

  const handleCheckboxChange = (event) => {
    const { value } = event.target;
    if (formData.tags.includes(value)) {
      setFormData({
        ...formData,
        tags: formData.tags.filter((tag) => tag !== value),
      });
    } else {
      setFormData({
        ...formData,
        tags: [...formData.tags, value],
      });
    }
  };

  //check all fields filled
  const validateForm = () => {
    return (
      formData.name.length > 0 &&
      formData.subtitle.length > 0 &&
      formData.description.length > 0 &&
      formData.goals.length > 0 &&
      formData.tags.length > 0
    );
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!validateForm) {
      console.log(formData.goals.length);
      toast("All Fields Should Be Filled", { type: "error" });
      return;
    }
    createCampaign(formData)
      .then((response) => {
        toast("Campaign Created Successfully", { type: "success" });
        dispatch(getCampaigns());
      })
      .catch((error) => {
        toast("Something went wrong", { type: "error" });
      });
  };
  return (
    <div>
      <div className="banner" >
      <img src="/Campaign-2.jpg" alt="Banner"  style={{
        height: "300px",
        width: "100%",
        objectFit : "cover",
              }}  />
    </div>
      <h1>Create Campaign</h1>
      <Form>
        <Row>
          <Col md="6">
            <FormGroup>
              <Label for="campaignName">Name *</Label>
              <Input
                type="text"
                name="campaignName"
                id="campaignName"
                placeholder="Enter Name"
                value={formData.name}
                onChange={(event) => {
                  setFormData({ ...formData, name: event.target.value });
                }}
              />
            </FormGroup>
          </Col>
          <Col md="6">
            <FormGroup>
              <Label for="campaignSubtitle">Subtitle *</Label>
              <Input
                type="text"
                name="campaignSubtitle"
                id="campaignSubtitle"
                placeholder="Enter Subtitle"
                value={formData.subtitle}
                onChange={(event) => {
                  setFormData({ ...formData, subtitle: event.target.value });
                }}
              />
            </FormGroup>
          </Col>
          <Col md="6">
            <FormGroup>
              <Label for="campaignCategory">Select Categories: *</Label>
              <div>
                <FormGroup check inline>
                  <Label check>
                    <Input
                      type='checkbox'
                      id='education'
                      name='campaignCategory'
                      value='Education'
                      checked={formData.tags.includes("Education")}
                      onChange={handleCheckboxChange}
                    />{" "}
                    Education
                  </Label>
                </FormGroup>
                <FormGroup check inline>
                  <Label check>
                    <Input
                      type='checkbox'
                      id='health'
                      name='campaignCategory'
                      value='Health'
                      checked={formData.tags.includes("Health")}
                      onChange={handleCheckboxChange}
                    />{" "}
                    Health
                  </Label>
                </FormGroup>
                <FormGroup check inline>
                  <Label check>
                    <Input
                      type='checkbox'
                      id='environment'
                      name='campaignCategory'
                      value='Environment'
                      checked={formData.tags.includes("Environment")}
                      onChange={handleCheckboxChange}
                    />{" "}
                    Environment
                  </Label>
                </FormGroup>
                <FormGroup check inline>
                  <Label check>
                    <Input
                      type='checkbox'
                      id='animals'
                      name='campaignCategory'
                      value='Animals'
                      checked={formData.tags.includes("Animals")}
                      onChange={handleCheckboxChange}
                    />{" "}
                    Animals
                  </Label>
                </FormGroup>
                <FormGroup check inline>
                  <Label check>
                    <Input
                      type='checkbox'
                      id='humanRights'
                      name='campaignCategory'
                      value='Human Rights'
                      checked={formData.tags.includes("Human Rights")}
                      onChange={handleCheckboxChange}
                    />{" "}
                    Human Rights
                  </Label>
                </FormGroup>
                <FormGroup check inline>
                  <Label check>
                    <Input
                      type='checkbox'
                      id='other'
                      name='campaignCategory'
                      value='Other'
                      checked={formData.tags.includes("Other")}
                      onChange={handleCheckboxChange}
                    />{" "}
                    Other
                  </Label>
                </FormGroup>
              </div>
            </FormGroup>
          </Col>
          <Col md="6">
            <FormGroup>
              <Label for="campaignDescription">Description *</Label>
              <Input
                type="text"
                name="campaignDescription"
                id="campaignDescription"
                placeholder="Enter Description"
                value={formData.description}
                onChange={(event) => {
                  setFormData({ ...formData, description: event.target.value });
                }}
              />
            </FormGroup>
          </Col>
          <Col md="6">
            <FormGroup>
              <Label for="campaignGoals">Goals *</Label>
              <Input
                type="text"
                name="campaignGoals"
                id="campaignGoals"
                placeholder="Enter Goals"
                value={formData.goals}
                onChange={(event) => {
                  setFormData({ ...formData, goals: event.target.value });
                }}
              />
            </FormGroup>
          </Col>
          <Col md="6">
            <FormGroup>
              <Label for="campaignImage">Image *</Label>
              <Input
                type="file"
                name="campaignImage"
                id="campaignImage"
                placeholder="Campaign Image"
                value={formData.image}
                onChange={(event) => {
                  setFormData({ ...formData, image: event.target.value });
                }}
              />
            </FormGroup>
          </Col>
        </Row>
      </Form>
      <Button color='primary' onClick={handleSubmit}>
        Submit
      </Button>
    </div>
  );
}

export default CampaignForm;
