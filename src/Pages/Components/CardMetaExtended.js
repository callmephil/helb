import React, { Fragment } from "react";
import _ from "lodash";
import { Card, Label, Button, Icon } from "semantic-ui-react";

export function CardMetaStartEndDate({ start_date, end_date, textAlign = "left" }) {
  return (
    <Card.Meta
      // @ts-ignore
      textAlign={textAlign}>
      <span className="date" style={{ fontSize: "10px" }}>
        <Icon className="fal fa-hourglass-start" />
        {start_date} -
        <Icon className="fal fa-hourglass-end" />
        {end_date ? end_date : "Unknown deadline"}
      </span>
    </Card.Meta>
  );
}

export function CardMetaLabels({ labels }) {
  return (
    <Card.Meta>
      {_.map(labels, (label) => label && <Label key={label} circular basic content={label} />)}
    </Card.Meta>
  );
}

export function CardMetaContributions({ by, date }) {
  return (
    <Fragment>
      <span>
        <Icon name="share" />
        {by}
      </span>
      <span>
        <Icon name="calendar outline" />
        {date}
      </span>
    </Fragment>
  );
}

export function CardMetaSocials({ social, size = "mini" }) {
  return (
    <Fragment>
      {_.map(social, ({ type, src }) => {
        const color = type === "instagram" ? "google plus" : type;
        return (
          <Button
            key={src}
            as={"a"}
            // @ts-ignore
            size={size}
            circular
            color={color}
            icon={type}
            target="_blank"
            href={src}
          />
        );
      })}
    </Fragment>
  );
}

export function CardMetaSocial({ type, url, size = "small" }) {
  return (
    <Button
      // @ts-ignore
      size={size}
      circular
      color={type === "instagram" ? "google plus" : type}
      icon={type}
      as={"a"}
      href={url}
      target="_blank"
      rel="noopener noreferrer"
    />
  );
}

export function CardMetaExtended({ children }) {
  return <Card.Content extra>{children}</Card.Content>;
}
