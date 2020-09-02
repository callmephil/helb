import React from "react";
import { Card, Icon, Label, Button } from "semantic-ui-react";
import _ from "lodash";

import { List } from "semantic-ui-react";

import { Modal } from "semantic-ui-react";
import { CardMetaSocials, CardMetaLabels, CardMetaContributions } from "../../Components/CardMetaExtended";

// const medicalType = ["Medical Assistance", "Mental Health", "Physiotherapy"];

// const statusType = ["Available"];

function ContactModal({ trigger, contact }) {
  const { name, phones } = contact;
  const [open, setOpen] = React.useState(false);

  return (
    <Modal
      size="mini"
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={trigger}>
      <Modal.Header>
        <Icon name="vcard" />
        {name}
      </Modal.Header>
      <Modal.Content>
        <List divided relaxed={true}>
          {_.map(phones, (phone) => (
            <List.Item key={phone}>
              <List.Icon name="phone" size="large" verticalAlign="middle" />
              <List.Content>
                <List.Header as="a" href={`tel:${phone}`}>
                  {phone}
                </List.Header>
                {/* <List.Description as="a">Call only</List.Description> */}
              </List.Content>
            </List.Item>
          ))}
        </List>
      </Modal.Content>
      <Modal.Actions>
        <Button color="black" onClick={() => setOpen(false)}>
          Close
        </Button>
        <Button
          content="Report"
          labelPosition="right"
          icon="warning"
          onClick={() => setOpen(false)}
          color='red'
        />
      </Modal.Actions>
    </Modal>
  );
}

export default function VolunteerCard({
  type,
  status,
  updated,
  location,
  contact,
  serviceType,
  description,
  labels,
  social,
  meta,
}) {
  return (
    <Card>
      <Card.Content>
        <Label color="black" ribbon icon="map marker alternate" content={location} />
        <span style={{ fontWeight: 600, fontSize: "1.1em", lineHeight: "1.28571429em" }}>
          {type}
        </span>
      </Card.Content>
      <Card.Content>
      <Card.Header content={serviceType} />
        <Card.Meta>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <span className="date">{status}</span>
            <span className="date">
              <Icon name="calendar outline" />
              {updated}
            </span>
          </div>
        </Card.Meta>
        <Card.Description>{description}</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <ContactModal
          trigger={
            <Button>
              <Icon name="user" />
              Contact
            </Button>
          }
          contact={contact}
        />
      </Card.Content>

      <Card.Content extra>
        <CardMetaLabels labels={labels} />
        <div className="card-organization-meta">
          <CardMetaContributions {...meta} />
          <CardMetaSocials social={social} />
        </div>
      </Card.Content>
    </Card>
  );
}
