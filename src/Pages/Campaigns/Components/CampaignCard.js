import React, { Fragment } from "react";
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

export function CampaignCardTwo({
  labels,
  type,
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
  status
}) {
  const redirectReducer = {
    as: "a",
    target: "_blank",
    href: url,
  };

  const CardHeader = () => {
    return (
      <Card.Content className="flex-grow-0">
        <Card.Header textAlign="center">
          <Image size="tiny" src={`./assets/images/${type}.png`} wrapped />
        </Card.Header>
      </Card.Content>
    );
  };

  const CardTitle = () => {
    return (
      <Card.Content className="flex-grow-0 align-items-center justify-center">
        <Card.Header
          {...redirectReducer}
          className="d-flex align-items-center justify-space-between campaign-card-text-padding">
          <span>{title}</span>
          <Icon className="fas fa-chevron-right" />
        </Card.Header>
        <Card.Meta className="campaign-card-text-padding">
          <span className="date">{organizer}</span>
        </Card.Meta>
      </Card.Content>
    );
  };

  const CardDescription = () => {
    return (
      <Fragment>
        <Card.Content className="no-border">
          <Card.Description className="campaign-description-boxSize campaign-card-text-padding">
            <p>{description.substr(0, 245)}...</p>
          </Card.Description>
        </Card.Content>

        <Card.Content className="no-border flex-grow-0">
          <Card.Description className="campaign-card-text-padding">
            <CardMetaStartEndDate start_date={start_date} end_date={end_date} />
          </Card.Description>
        </Card.Content>
      </Fragment>
    );
  };

  const CardDonationButton = ({status}) => {
    switch(status) {
      // case "Active":
      case "Closed":
        return (
          <Card.Content className="d-flex flex-grow-0 align-items-center justify-center">
            <Button
              className="campagin-button-text-size"
              size="small"
              color="green"
              icon="heart"
              content="Goal Achieved"
              label={{ basic: true, color: "green", pointing: "left", content: `Your Awesome !` }}
              {...redirectReducer}
            />
          </Card.Content>
        );
      default:
        return (
          <Card.Content className="d-flex flex-grow-0 align-items-center justify-center">
            <Button
              className="campagin-button-text-size"
              size="small"
              color="red"
              content="Donate"
              icon="heart"
              label={{ basic: true, color: "red", pointing: "left", content: `${popularity}` }}
              {...redirectReducer}
            />
          </Card.Content>
        );
    }
  };

  return (
    <Card>
      <CardHeader />
      <Image
        {...redirectReducer}
        src={thumbnail}
        wrapped
        ui={false}
        className="campaign-card-image-height"
      />

      <CardTitle />

      <Card.Content className="no-border progress-bar-padding flex-grow-0 align-items-center justify-center ">
        <Progress
          precision={2}
          size="small"
          percent={progressValue}
          indicating
          content={progressText}
        />
      </Card.Content>

      <CardDescription />

      <CardDonationButton status={status} />

      <Card.Content extra>
        <CardMetaLabels labels={labels} />
        <div className="card-organization-meta">
          <CardMetaContributions by="Helb" date="Today" />
          <span>Share It!</span>
        </div>
      </Card.Content>
    </Card>
  );
}
