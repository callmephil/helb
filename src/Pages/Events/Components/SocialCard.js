import React, { Fragment } from "react";
import _ from "lodash";
import { Tweet } from "react-twitter-widgets";
import InstagramEmbed from "react-instagram-embed";
import { FacebookProvider, EmbeddedPost } from "react-facebook";
import { Card, Icon, Label, Button } from "semantic-ui-react";

const { REACT_APP_FB_ID } = process.env;

const CardMeta = ({ labels, by, date, cardId, type, url }) => {
  return (
    <Card.Content extra>
      <Card.Meta>
        {_.map(labels, (label) => (
          <Label key={label} circular basic content={label} />
        ))}
      </Card.Meta>
      <div className="card-organization-meta">
        <span>
          <Icon name="share" />
          {by}
        </span>
        <span>
          <Icon name="calendar outline" />
          {date}
        </span>
        <div>
          <Icon name="arrow right" />
          <Button
            size="mini"
            circular
            color={type === "instagram" ? "google plus" : type}
            icon={type}
            as={"a"}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
          />
        </div>
      </div>
    </Card.Content>
  );
};

const extractTwitterIdFromUrl = (url) => {
  if (typeof url !== "string" || url === "") {
    return;
  }
  return url.substr(url.lastIndexOf("s/") + 2, url.length);
};

const getTypeFromUrl = (url) => {
  let _type = "unknown";
  if (typeof url === "string" && url !== "") {
    const types = ["twitter", "facebook", "instagram"];
    for (const type of types) {
      if (url.includes(type)) {
        _type = type;
      } else continue;
    }
  }
  return _type;
};

function EmbedSocialCard({ type, url }) {
  switch (type) {
    case "facebook":
      return (
        <FacebookProvider appId={REACT_APP_FB_ID || "1234567"}>
          <EmbeddedPost href={url} width="auto" />
        </FacebookProvider>
      );
    case "instagram":
      return (
        <InstagramEmbed
          url={url}
          hideCaption={false}
          containerTagName="div"
          protocol=""
          injectScript
          onLoading={() => {}}
          onSuccess={() => {}}
          onAfterRender={() => {}}
          onFailure={() => {}}
        />
      );
    case "twitter":
      const tweetId = extractTwitterIdFromUrl(url);
      return <Tweet tweetId={tweetId} />;
    default:
      return <Fragment></Fragment>;
  }
}

const meta = {
  by: "data example",
  date: "24/08/20",
  cardId: 1,
};

const labels = ["Fund Raising", "Gathering", "Outdoor"];

export default function SocialCard({ url }) {
  const type = getTypeFromUrl(url);
  return (
    <Card fluid>
      <Card.Content className="flex-no-grow">
        <Label color="black" ribbon icon="map marker alternate" content="location" />
        <span
          className="text-capitalize"
          style={{ fontWeight: 600, fontSize: "1.2em", lineHeight: "1.28571429em" }}>
          {type}
        </span>
      </Card.Content>
      <Card.Content className="card-no-padding">
        <EmbedSocialCard type={type} url={url} />
      </Card.Content>

      <CardMeta labels={labels} {...meta} type={type} url={url} />
    </Card>
  );
}
