import React, { Fragment } from "react";
import { Card, Image, Icon } from "semantic-ui-react";

import "./OrganizationCard.css"
import { CardMetaLabels, CardMetaContributions, CardMetaSocials } from "../../Components/CardMetaExtended";
import _ from "lodash";

function CardExtraLinks({ type, src }) {
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
      return <Fragment />;
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

export default function OrganizationCard({ cardContent }) {
  const { image, extra, name, description, website, location, labels, meta, socials } = cardContent;
  return (
    <Card>
      <Image
        centered
        wrapped
        ui={false}
        src={image.src}
        className={`image-padding image-bg-${image.backgroundColor}`}
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

      {_.map(extra, (redirect) => 
        <CardExtraLinks key={redirect.src} {...redirect}/>
      )}

      <Card.Content extra>
        <CardMetaLabels labels={labels} />
        <div className="card-organization-meta">
          <CardMetaContributions {...meta} />
          <div>
          <CardMetaSocials social={socials} size="mini" />

          </div>
        </div>
      </Card.Content>
    </Card>
  );
}
