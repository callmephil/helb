import React, { useState, useEffect } from "react";
import { Card, Container, Progress } from "semantic-ui-react";
import CampaignCard from "./Components/CampaignCard";
import PageHeadings from "../Components/PageHeadings";

export default function CampaignsPage() {
  const [percent, setPercent] = useState(0);
  const link = "support-your-lebanese-colleagues";

  useEffect(() => {
    setPercent(32);
    return () => {
      // cleanup
    };
  }, [percent]);

  return (
    <Container style={{ padding: "4em 0em" }}>
      <PageHeadings
        title="Campaigns"
        description={`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
          sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
          est laborum.`}>
        <Progress
          progress="value"
          value={percent}
          total={100}
          indicating
          content="*Total estimated amount in Million $ raised to date."
        />
      </PageHeadings>

      <Card.Group stackable doubling itemsPerRow={3}>
        <CampaignCard url={link} title="GoFundMe" by="Helb" date="20/08/2020" />
        <CampaignCard url={link} title="GoFundMe" by="Helb" date="20/08/2020" />
        <CampaignCard url={link} title="GoFundMe" by="Helb" date="20/08/2020" />
        <CampaignCard url={link} title="GoFundMe" by="Helb" date="20/08/2020" />
        <CampaignCard url={link} title="GoFundMe" by="Helb" date="20/08/2020" />
        <CampaignCard url={link} title="GoFundMe" by="Helb" date="20/08/2020" />
        <CampaignCard url={link} title="GoFundMe" by="Helb" date="20/08/2020" />
        <CampaignCard url={link} title="GoFundMe" by="Helb" date="20/08/2020" />
        <CampaignCard url={link} title="GoFundMe" by="Helb" date="20/08/2020" />
      </Card.Group>
    </Container>
  );
}
