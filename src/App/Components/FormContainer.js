import React from "react";
import { Sidebar, Menu, Container } from "semantic-ui-react";

export default function FormContainer({ setVisible, visible, content, children }) {
  return (
    <Sidebar.Pushable>
      <Sidebar
        as={Menu}
        className="form-container-scale"
        animation="overlay"
        icon="labeled"
        direction="right"
        // inverted
        onHide={() => setVisible(false)}
        vertical
        visible={visible}>
        <Container style={{ padding: "2rem 0em" }}>
          {content}
        </Container>
      </Sidebar>

      <Sidebar.Pusher dimmed={visible}>{children}</Sidebar.Pusher>
    </Sidebar.Pushable>
  );
}
