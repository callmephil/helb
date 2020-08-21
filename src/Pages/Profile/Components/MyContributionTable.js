import React from "react";
import { Table, Button, Icon } from "semantic-ui-react";

export default function MyContributionTable() {
  const TableRow = ({ type, link, description, status }) => {
    const FormatStatus = () => {
      switch (status) {
        case "Approved":
          return { positive: true };
        case "Denied":
        case "Deprecated":
          return { negative: true };
        default:
          return { warning: true };
      }
    };

    const isPositive = FormatStatus();

    return (
      <Table.Row>
        <Table.Cell {...isPositive}>
          <Icon name="checkmark" />
          {status}
        </Table.Cell>
        <Table.Cell>{type}</Table.Cell>
        <Table.Cell>
          <a target="_blank" rel="noopener noreferrer" href={link}>
            {link}
          </a>
        </Table.Cell>
        <Table.Cell>{description}</Table.Cell>
        <Table.Cell>01/01/2021</Table.Cell>
        <Table.Cell>
          <div style={{ display: "flex", justifyContent: "space-around" }}>
            <Button inverted color="blue" content="Edit" />

            {/* <Button inverted color="green" content="Approve" />
            <Button inverted color="red" content="Deny" /> */}
          </div>
        </Table.Cell>
      </Table.Row>
    );
  };

  const TableHeader = () => {
    return (
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Status</Table.HeaderCell>
          <Table.HeaderCell>Type</Table.HeaderCell>
          <Table.HeaderCell>Link</Table.HeaderCell>
          <Table.HeaderCell>Description</Table.HeaderCell>
          <Table.HeaderCell>Date</Table.HeaderCell>
          <Table.HeaderCell>Actions</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
    );
  };

  return (
    <Table celled>
      <TableHeader />

      <Table.Body>
        <TableRow
          type={"Social"}
          link={"https://www.facebook.com"}
          description={"Some Description"}
          status={"Pending"}
        />
        <TableRow
          type={"Social"}
          link={"https://www.facebook.com"}
          description={"Some Description"}
          status={"Approved"}
        />
        <TableRow
          type={"Social"}
          link={"https://www.facebook.com"}
          description={"Some Description"}
          status={"Denied"}
        />
        <TableRow
          type={"Social"}
          link={"https://www.facebook.com"}
          description={"Some Description"}
          status={"Pending"}
        />
      </Table.Body>
    </Table>
  );
}
