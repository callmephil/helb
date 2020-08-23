import _ from "lodash";
import React, { Fragment } from "react";
import { makeKeyOfObject } from "../../../Utils/ComponentHelpers";
import { Card, Image, Icon, Button, Label } from "semantic-ui-react";

export default function InstitutionCard({ cardContent }) {
  const { image, name, description, website, location, extra, labels, meta } = cardContent;

  const CardMeta = ({ labels, by, date, cardId }) => {
    return (
      <Card.Content extra>
        <Card.Meta>
          {_.map(labels, (label) => (
            <Label key={label} circular basic content={label} />
          ))}
        </Card.Meta>
        <div className="card-institution-meta">
          <span>
            <Icon name="share" />
            {by}
          </span>
          <span>
            <Icon name="calendar outline" />
            {date}
          </span>
          <div>
            <Button size="mini" circular color="facebook" icon="facebook" />
            <Button size="mini" circular color="twitter" icon="twitter" />
            <Button size="mini" circular color="google plus" icon="instagram" />
          </div>
        </div>
      </Card.Content>
    );
  };

  const ContentExtra = ({ src, type }) => {
    const obj = {
      text: "Unknown",
      icon: "stop circle outline",
    };
    switch (type) {
      case 0:
        obj.text = "Donate";
        obj.icon = "money bill alternate outline";
        break;
      case 1:
        obj.text = "Contact";
        obj.icon = "address card outline";
        break;
      default:
        return <Fragment></Fragment>;
    }

    return (
      <Card.Content extra>
        <a href={src} target="_blank" rel="noopener noreferrer">
          {/* @ts-ignore */}
          <Icon name={obj.icon} />
          {obj.text}
        </a>
      </Card.Content>
    );
  };

  return (
    <Card>
      <Image
        centered
        wrapped
        ui={false}
        src={image.src}
        className={`image-padding ${image.backgroundColor}`}
        as="a"
        target="_blank"
        rel="noopener noreferrer"
        href={website}
        label={{
          color: "black",
          ribbon: true,
          icon: "map marker alternate",
          content: location,
        }}
      />
      <Card.Content>
        <Card.Header content={name} />
        <Card.Description content={description} />
      </Card.Content>

      {_.map(extra, (link) => (
        <ContentExtra key={makeKeyOfObject(link)} {...link} />
      ))}
      <CardMeta labels={labels} {...meta} />
    </Card>
  );
}
