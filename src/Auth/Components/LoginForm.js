// @ts-nocheck
import React from "react";

import { Button, Form, Grid, Divider } from "semantic-ui-react";

const grid_config = {
  celled: "internally",
  columns: "equal",
//   textAlign: "center",
  verticalAlign: "middle",
  stackable: true,
};
const input_config = { iconPosition: "left", fluid: true };

export default function LoginForm() {
  return (
    <Grid {...grid_config}>
      <Grid.Column className="padding-none">
        <Button.Group fluid vertical>
          <Button
            className="button-group-spacing"
            color="facebook"
            icon="facebook"
            content="Sign in with Facebook"
          />
          <Button
            className="button-group-spacing"
            color="twitter"
            icon="twitter"
            content="Sign in with Twitter"
          />
          <Button
            className="button-group-spacing"
            color="google plus"
            icon="google plus"
            content="Sign in with Google"
          />
        </Button.Group>

        <Divider content="Or" horizontal />

        <Form>
          <Form.Input {...input_config} icon="user" placeholder="E-mail address" />
          <Form.Input {...input_config} icon="lock" placeholder="Password" type="password" />
          <Button color="black" fluid size="large">
            Login
          </Button>
        </Form>

        <Divider content="-" horizontal />
      </Grid.Column>
    </Grid>
  );
}
