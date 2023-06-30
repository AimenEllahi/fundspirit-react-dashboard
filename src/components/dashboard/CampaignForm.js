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
  const [selectedFile, setSelectedFile] = useState(null); //for image
  const fd = new FormData();
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

  const appendFormData = () => {
    fd.append("name", formData.name);
    fd.append("description", formData.description);
    fd.append("subtitle", formData.subtitle);
    fd.append("goals", formData.goals);
    fd.append("tags", formData.tags);
    fd.append("image", selectedFile);
  };
  //check all fields filled
  const validateForm = () => {
    return (
      formData.name.length > 0 &&
      formData.subtitle.length > 0 &&
      formData.description.length > 0 &&
      formData.goals.length > 0 &&
      formData.tags.length > 0 &&
      selectedFile
    );
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!validateForm()) {
      toast("All Fields Should Be Filled", { type: "error" });
      return;
    }
    appendFormData();

    createCampaign(fd)
      .then((response) => {
        toast("Campaign Created Successfully", { type: "success" });
        dispatch(getCampaigns());
        setFormData(initialState);
        setSelectedFile(null);
      })
      .catch((error) => {
        toast("Something went wrong", { type: "error" });
      });
  };
  return (
    <div>
      <h1>Create Campaign</h1>
      <Form>
        <Row>
          <Col md='12'>
            <FormGroup>
              <Label for='campaignName'>Name *</Label>
              <Input
                type='text'
                name='campaignName'
                id='campaignName'
                placeholder='Enter Name'
                value={formData.name}
                onChange={(event) => {
                  setFormData({ ...formData, name: event.target.value });
                }}
              />
            </FormGroup>
          </Col>
          <Col md='12'>
            <FormGroup>
              <Label for='campaignSubtitle'>Subtitle *</Label>
              <Input
                type='text'
                name='campaignSubtitle'
                id='campaignSubtitle'
                placeholder='Enter Subtitle'
                value={formData.subtitle}
                onChange={(event) => {
                  setFormData({ ...formData, subtitle: event.target.value });
                }}
              />
            </FormGroup>
          </Col>
          <Col md='12'>
            <FormGroup>
              <Label for='campaignCategory'>Select Categories: *</Label>
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
                <FormGroup check inline>
    <Label check>
      <Input
        type='checkbox'
        id='povertyAlleviation'
        name='campaignCategory'
        value='Poverty Alleviation'
        checked={formData.tags.includes("Poverty Alleviation")}
        onChange={handleCheckboxChange}
      />{" "}
      Poverty Alleviation
    </Label>
  </FormGroup>
  <FormGroup check inline>
    <Label check>
      <Input
        type='checkbox'
        id='disasterRelief'
        name='campaignCategory'
        value='Disaster Relief'
        checked={formData.tags.includes("Disaster Relief")}
        onChange={handleCheckboxChange}
      />{" "}
      Disaster Relief
    </Label>
  </FormGroup>
  <FormGroup check inline>
    <Label check>
      <Input
        type='checkbox'
        id='womenEmpowerment'
        name='campaignCategory'
        value='Women Empowerment'
        checked={formData.tags.includes("Women Empowerment")}
        onChange={handleCheckboxChange}
      />{" "}
      Women Empowerment
    </Label>
  </FormGroup>
  <FormGroup check inline>
    <Label check>
      <Input
        type='checkbox'
        id='childrensRights'
        name='campaignCategory'
        value="Children's Rights"
        checked={formData.tags.includes("Children's Rights")}
        onChange={handleCheckboxChange}
      />{" "}
      Children's Rights
    </Label>
  </FormGroup>
  <FormGroup check inline>
    <Label check>
      <Input
        type='checkbox'
        id='elderlyCare'
        name='campaignCategory'
        value='Elderly Care'
        checked={formData.tags.includes("Elderly Care")}
        onChange={handleCheckboxChange}
      />{" "}
      Elderly Care
    </Label>
  </FormGroup>
  <FormGroup check inline>
    <Label check>
      <Input
        type='checkbox'
        id='communityDevelopment'
        name='campaignCategory'
        value='Community Development'
        checked={formData.tags.includes("Community Development")}
        onChange={handleCheckboxChange}
      />{" "}
      Community Development
    </Label>
  </FormGroup>
  <FormGroup check inline>
    <Label check>
      <Input
        type='checkbox'
        id='mentalHealth'
        name='campaignCategory'
        value='Mental Health'
        checked={formData.tags.includes("Mental Health")}
        onChange={handleCheckboxChange}
      />{" "}
      Mental Health
    </Label>
  </FormGroup>
  <FormGroup check inline>
    <Label check>
      <Input
        type='checkbox'
        id='refugeesImmigration'
        name='campaignCategory'
        value='Refugees and Immigration'
        checked={formData.tags.includes("Refugees and Immigration")}
        onChange={handleCheckboxChange}
      />{" "}
      Refugees and Immigration
    </Label>
  </FormGroup>
              </div>
            </FormGroup>
          </Col>
          <Col md='12'>
            <FormGroup>
              <Label for='campaignDescription'>Description *</Label>
              <textarea
                name='campaignDescription'
                id='campaignDescription'
                className='form-control'
                placeholder='Enter Description'
                style={{
                  height: "5rem",
                }}
                value={formData.description}
                onChange={(event) => {
                  setFormData({ ...formData, description: event.target.value });
                }}
              />
            </FormGroup>
          </Col>
          <Col md='12'>
            <FormGroup>
              <Label for='campaignGoals'>Goals *</Label>
              <Input
                type='text'
                name='campaignGoals'
                id='campaignGoals'
                placeholder='Enter Goals'
                value={formData.goals}
                onChange={(event) => {
                  setFormData({ ...formData, goals: event.target.value });
                }}
              />
            </FormGroup>
          </Col>
          <Col md='12'>
            <FormGroup>
              <Label for='campaignImage'>Image *</Label>
              <Input
                id='exampleFile'
                name='file'
                type='file'
                onChange={(e) => setSelectedFile(e.target.files[0])}
                required
              />
            </FormGroup>
          </Col>
        </Row>
      </Form>
      <Button disabled={!validateForm()} color='primary' onClick={handleSubmit}>
        Submit
      </Button>
    </div>
  );
}

export default CampaignForm;
