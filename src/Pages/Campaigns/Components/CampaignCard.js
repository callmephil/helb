import React from "react";
import { Card, Icon, Button } from "semantic-ui-react";
import { Image, Progress } from "semantic-ui-react";
import {
  CardMetaLabels,
  CardMetaContributions,
  CardMetaStartEndDate,
} from "../../Components/CardMetaExtended";

import "./CampaignCard.css";

export default function CampaignCard({ url, title, by, date }) {
  return (
    <Card>
      <Card.Content>
        <Card.Header textAlign="center">{title}</Card.Header>
      </Card.Content>
      <Card.Content>
        {/* <iframe 
        title="kickstarter"
        src="https://www.kickstarter.com/projects/artistsliteracies/grief-deck-an-artists-card-set-for-communal-grieving/widget/card.html?v=2" 
        scrolling="no" 
        /> */}
        <embed
          src={`https://www.gofundme.com/mvc.php?route=widgets/mediawidget&fund=${url}&image=1&coinfo=1&preview=1`}
          type="text/html"
        />
      </Card.Content>
      <Card.Content extra>
        <div>
          <Icon name="share" />
          By {by}
        </div>
      </Card.Content>
      <Card.Content extra>
        <div>
          <Icon name="calendar outline" />
          Posted on {date}
        </div>
      </Card.Content>
    </Card>
  );
}

const labels = ["Fund Raising", "Gathering", "Outdoor"];

export function CampaignCardTwo({
  url,
  title,
  description,
  organizer,
  start_date,
  end_date,
  progressText,
  progressValue,
  thumbnail,
  popularity,
}) {
  const redirectReducer = {
    as:"a",
    target:"_blank" ,
    href: url
  }
  return (
    <Card>
      <Card.Content className="no-grow">
        <Card.Header textAlign="center">
          <Image size="tiny" src="./assets/images/gofundme.png" wrapped />
        </Card.Header>
      </Card.Content>
      <Image {...redirectReducer} src={thumbnail} wrapped ui={false} />

      <Card.Content>
        <Card.Header {...redirectReducer} className="campaign-card-title campaign-card-text-padding">
          <span>{title}</span>
          <Icon className="fas fa-chevron-right" />
        </Card.Header>
        <Card.Meta className="campaign-card-text-padding">
          <span className="date">{organizer}</span>
        </Card.Meta>
        <Card.Meta className="progress-bar-padding">
          <Progress precision={2} size="small" percent={progressValue} indicating content={progressText} />
        </Card.Meta>
        <Card.Description className="campaign-description-boxSize campaign-card-text-padding">
          <p>{description.substr(0, 200)}...</p>
        </Card.Description>
        <Card.Description className="campaign-card-text-padding">
          <CardMetaStartEndDate start_date={start_date} end_date={end_date} />
        </Card.Description>
      </Card.Content>

      <Card.Content>
        <Button
          size="small"
          color="red"
          content="Donate"
          icon="heart"
          label={{ basic: true, color: "red", pointing: "left", content: `${popularity}` }}
          {...redirectReducer}
        />
      </Card.Content>

      <Card.Content extra>
        <CardMetaLabels labels={labels} />
        <div className="card-institution-meta">
          <CardMetaContributions by="Helb" date="Today" />
          <span>Share It!</span>
        </div>
      </Card.Content>
    </Card>
  );
}
