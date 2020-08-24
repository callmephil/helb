import React from "react";
import { Card, Icon, Label, Button } from "semantic-ui-react";
import _ from "lodash";

import { List } from "semantic-ui-react";

import { Modal } from "semantic-ui-react";

// const medicalType = ["Medical Assistance", "Mental Health", "Physiotherapy"];

// const statusType = ["Available"];

// const _struct = {
//   type: "",
//   status: "",
//   location: "",
//   contact: {
//     name: "",
//     phones: [""],
//   },
//   serviceType: "",
//   social: [
//     {
//       type: "facebook",
//       src: "",
//     },
//     {
//       type: "instagram",
//       src: "",
//     },
//   ],
//   description: ``,
//   labels: ["", ""],
//   meta: {
//     by: "Helb",
//     date: "20/08/20",
//     cardId: 1,
//   },
// };

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
        <List divided relaxed>
          {_.map(phones, (phone) => (
            <List.Item>
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
  const CardMeta = ({ social, labels, by, date, cardId }) => {
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
            {_.map(social, ({ type, src }) => {
              const color = type === "instagram" ? "google plus" : type;
              return <Button as={"a"} size="small" circular color={color} icon={type} href={src} />;
            })}
          </div>
        </div>
      </Card.Content>
    );
  };

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
      <CardMeta social={social} labels={labels} {...meta} />
    </Card>
  );
}
