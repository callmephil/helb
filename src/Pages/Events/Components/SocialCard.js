import React, { Fragment } from "react";
import { Tweet } from "react-twitter-widgets";
import InstagramEmbed from "react-instagram-embed";
import { FacebookProvider, EmbeddedPost } from "react-facebook";
import { Card, Label } from "semantic-ui-react";
import {
  CardMetaLabels,
  CardMetaContributions,
  CardMetaSocial,
} from "../../Components/CardMetaExtended";
import { getSocialTypeFromUrl } from "../../../Utils/ComponentHelpers";

const { REACT_APP_FB_ID } = process.env;

const extractTwitterIdFromUrl = (url) => {
  if (typeof url !== "string" || url === "") {
    return;
  }
  return url.substr(url.lastIndexOf("s/") + 2, url.length);
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
  const type = getSocialTypeFromUrl(url);
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

      <Card.Content extra>
        <CardMetaLabels labels={labels} />
        <div className="card-organization-meta">
          <CardMetaContributions {...meta} />
          <CardMetaSocial type={type} url={url} />
        </div>
      </Card.Content>
    </Card>
  );
}
