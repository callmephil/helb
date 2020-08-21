import _ from "lodash";
import React from "react";
import { utils } from "../../../Utils";
import { Link } from "react-router-dom";
import { Card, Image, Icon, Button, Label } from "semantic-ui-react";

export default function InstitutionCard({ cardContent }) {
  const { image, institutionName, description, links, labels, meta } = cardContent;

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

  const ContentLinks = ({ src, icon, text }) => {
    return (
      <Card.Content extra>
        <Link to={src}>
          <Icon name={icon} />
          {text}
        </Link>
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
      />
      <Card.Content>
        <Card.Header content={institutionName} />
        <Card.Description content={description} />
      </Card.Content>

      {_.map(links, (link) => (
        <ContentLinks key={utils.makeKeyOfObject(link)} {...link} />
      ))}
      <Card.Content extra>
        <a href="tel:7094510">
          <Icon name="phone" />
          Call
        </a>
      </Card.Content>
      <CardMeta labels={labels} {...meta} />
    </Card>
  );
}
