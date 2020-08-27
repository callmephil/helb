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

export function CardMetaLabels({labels}) {
  return (
    <Card.Meta>
      {_.map(labels, (label) => (
        <Label key={label} circular basic content={label} />
      ))}
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

export function CardMetaSocials({ social }) {
  return (
    <Fragment>
      {_.map(social, ({ type, src }) => {
        const color = type === "instagram" ? "google plus" : type;
        return <Button as={"a"} size="small" circular color={color} icon={type} href={src} />;
      })}
    </Fragment>
  );
}

export function CardMetaExtended({ children }) {
  return <Card.Content extra>{children}</Card.Content>;
}
