import React from "react";
import { Card, Image, } from "semantic-ui-react";

import "./OrganizationCard.css"
import { CardMetaLabels, CardMetaContributions, CardMetaSocials, CardExtraLinks } from "../../Components/CardMetaExtended";

export default function OrganizationCard({ cardContent }) {
  const { image, name, description, website, location, extra, labels, meta, socials } = cardContent;
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

      <CardExtraLinks {...extra}/>

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
