import React, { useState } from "react";
import PageHeadings from "../../../Components/PageHeadings";
import { Container, Grid, Form, Button, Image } from "semantic-ui-react";
import { getTypeFromUrl } from "../../../../Utils/Script";
import { CardWrapper } from "../../../Campaigns/CampaignsPage";

const options = [
  { key: "c", text: "Campaign", value: "campaign" },
  { key: "e", text: "Event", value: "event" },
  { key: "o", text: "Other", value: "other" },
];

const option_campaign_labels = [
  { key: "angular", text: "Angular", value: "angular" },
  { key: "css", text: "CSS", value: "css" },
  { key: "design", text: "Graphic Design", value: "design" },
  { key: "ember", text: "Ember", value: "ember" },
  { key: "html", text: "HTML", value: "html" },
  { key: "ia", text: "Information Architecture", value: "ia" },
  { key: "javascript", text: "Javascript", value: "javascript" },
  { key: "mech", text: "Mechanical Engineering", value: "mech" },
  { key: "meteor", text: "Meteor", value: "meteor" },
  { key: "node", text: "NodeJS", value: "node" },
  { key: "plumbing", text: "Plumbing", value: "plumbing" },
  { key: "python", text: "Python", value: "python" },
  { key: "rails", text: "Rails", value: "rails" },
  { key: "react", text: "React", value: "react" },
  { key: "repair", text: "Kitchen Repair", value: "repair" },
  { key: "ruby", text: "Ruby", value: "ruby" },
  { key: "ui", text: "UI Design", value: "ui" },
  { key: "ux", text: "User Experience", value: "ux" },
];

export default function FormContributionSimple() {
  const [labels, setLabels] = useState([]);
  const [contributionType, setContributionType] = useState(null);
  const [websiteUrl, setWebsiteUrl] = useState(null);
  const [validation, setValidation] = useState(false);
  const [type, setType] = useState(null);

  const handleSubmit = () => {
    if (contributionType === "campaign") {
      const type = getTypeFromUrl(websiteUrl);
      setType(type);
    }
    setValidation(true);
  };

  const PreviewRender = () => {
    if (!validation)
      return <Image src="https://react.semantic-ui.com/images/wireframe/paragraph.png" />;

    switch (type) {
      case "gofundme":
      case "justgiving":
        return <CardWrapper type={type} url={websiteUrl} labels={labels} />;
      default:
        return <Image src="https://react.semantic-ui.com/images/wireframe/paragraph.png" />;
    }
  };

  return (
    <PageHeadings title="Simple Contribution" description={`Campaigns, Events`}>
      <Container style={{ padding: "1rem", textAlign: "left" }}>
        <Grid stackable columns={2}>
          <Grid.Column>
            <div style={{ textAlign: "center", marginBottom: "2rem", padding: "0 25px" }}>
              <h1 style={{ borderBottom: "1px solid #9b9b9b" }}>Fill the form</h1>
            </div>
            <Form onSubmit={() => handleSubmit()}>
              <Form.Input
                required
                label="Website URL:"
                // value={websiteUrl}
                placeholder="Paste url"
                onChange={(e) => setWebsiteUrl(e.target.value)}
                id="form-subcomponent-shorthand-input-last-name"
              />
              <Form.Group widths="equal">
                <Form.Select
                  required
                  value={contributionType}
                  options={options}
                  label="Contribution Type:"
                  placeholder="Select Type"
                  selection
                  onChange={(e, data) => setContributionType(data.value)}
                />
                <Form.Dropdown
                  search
                  multiple
                  required
                  selection
                  value={labels}
                  options={option_campaign_labels}
                  label="Labels/Filters:"
                  placeholder="Select labels"
                  // @ts-ignore
                  onChange={(e, data) => setLabels(data.value)}
                />
              </Form.Group>
              <Button type="submit">Submit</Button>
              <Button type="submit">Preview</Button>
            </Form>
          </Grid.Column>
          <Grid.Column>
            <div style={{ textAlign: "center", marginBottom: "2rem", padding: "0 25px" }}>
              <h1 style={{ borderBottom: "1px solid #9b9b9b" }}>Preview</h1>
            </div>
            <PreviewRender />
          </Grid.Column>
        </Grid>
      </Container>
    </PageHeadings>
  );
}
