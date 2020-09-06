import React , { useState } from "react";
import {
  Grid,
  Header,
  Button,
  Container,
  Image,
  Segment,
  Form,
  Select,
  Input,
} from "semantic-ui-react";
import ProfileCard from "./Components/ProfileCard";
import MyContributionTable from "./Components/MyContributionTable";
import PageHeadings from "../Components/PageHeadings";
import { getTypeFromUrl } from "../../Utils/Script";
import { CardWrapper } from "../Campaigns/CampaignsPage";

const options = [
  { key: "c", text: "Campaign", value: "campaign" },
  { key: "e", text: "Event", value: "event" },
  { key: "o", text: "Other", value: "other" },
];


// detect type
// wait for url to trigger second column
function Example() {
  const [contributionType, setContributionType] = useState(null);
  const [websiteUrl, setWebsiteUrl] = useState(null);
  const [validation, setValidation] = useState(false);
  const [type, setType] = useState(null)

  const handleSubmit = () => {
    if (contributionType === 'campaign') {
      const type = getTypeFromUrl(websiteUrl);
      setType(type);
    }
    setValidation(true);
  }


  return (
    <PageHeadings title="Simple Contribution" description={`Campaigns, Events`}>
      <Container style={{ padding: "1rem", textAlign: "left" }}>
        <Grid stackable columns={2}>
          <Grid.Column textAlign="center">
            <h1>Fill the form</h1>
            <Form onSubmit={() => handleSubmit()}>
                <Form.Select
                  required
                  value={contributionType}
                  options={options}
                  label="Contribution Type"
                  placeholder="Contribution Type"
                  selection
                  onChange={(e, data) => setContributionType(data.value)}
                />
                <Form.Input
                  required
                  label="Website URL"
                  value={websiteUrl}
                  placeholder="Website URL"
                  onChange={(e) => setWebsiteUrl(e.target.value)}
                  id="form-subcomponent-shorthand-input-last-name"
                />
                <Button fluid type='submit'>Preview</Button>
            </Form>
          </Grid.Column>
          <Grid.Column textAlign="center">
            <h1>Preview</h1>
            {validation &&
              <CardWrapper type={type} url={websiteUrl} labels={[]} />
          }
          </Grid.Column>
        </Grid>
      </Container>
    </PageHeadings>
  );
};

function ProfileContributionAction({ setFormComponent, setVisible }) {
  const example = <Example />
  return (
    <Grid celled="internally" columns="equal" stackable>
      <Grid.Row textAlign="center">
        <Grid.Column>
          <Header as="h3" style={{ fontSize: "1.2em" }}>
            Simple Contribution
          </Header>
          <p style={{ fontSize: "1em" }}>
            You found something interesting you would like to share? Click the button below. best
            fit for events and memorials.
          </p>
          <Button
            size="huge"
            color="blue"
            onClick={() => {
              setVisible(true);
              setFormComponent(example);
            }}>
            Contribute
          </Button>
        </Grid.Column>
        <Grid.Column>
          <Header as="h3" style={{ fontSize: "1.2em" }}>
            Advanced Contribution
          </Header>
          <p style={{ fontSize: "1em" }}>
            If you're an activist or an advanced user, you can contribute by adding Organizations
            and much more...
          </p>
          <Button size="huge" color="black">
            Contribute
          </Button>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}

export default function ProfilePage({ setFormComponent, setVisible }) {
  return (
    <Container style={{ padding: "4em 0em" }}>
      <PageHeadings title="Profile Page" description={``}>
        <Grid stackable>
          <Grid.Row>
            <Grid.Column mobile={16} tablet={6} computer={4} stretched>
              <ProfileCard
                name="Philippe Makzoume"
                email={"phil.makzoume@gmail.com"}
                accType="Standard"
                contributions={0}
              />
            </Grid.Column>

            <Grid.Column mobile={16} tablet={10} computer={12}>
              <PageHeadings
                title="Contribute"
                description={`Your Contributions Helps Helb helping others by providing them rapid and reliable informations. Choose below how you would like to help helb improve its content.`}>
                <ProfileContributionAction
                  setFormComponent={setFormComponent}
                  setVisible={setVisible}
                />
              </PageHeadings>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width={16}>
              <PageHeadings title="My Contributions" description={``}>
                <MyContributionTable />
              </PageHeadings>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </PageHeadings>
    </Container>
  );
}
