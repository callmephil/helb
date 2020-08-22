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

export default function SignupForm() {
  return (
    <Grid {...grid_config}>
      <Grid.Column className="padding-none">
        <Button.Group fluid vertical>
          <Button
            className="button-group-spacing"
            color="facebook"
            icon="facebook"
            content="Sign up with Facebook"
          />
          <Button
            className="button-group-spacing"
            color="twitter"
            icon="twitter"
            content="Sign up with Twitter"
          />
          <Button
            className="button-group-spacing"
            color="google plus"
            icon="google plus"
            content="Sign up with Google"
          />
        </Button.Group>

        <Divider content="Or" horizontal />

        <Form>
          <Form.Input {...input_config} icon="user" placeholder="E-mail address" type="mail" />
          <Form.Group widths="equal">
            <Form.Input {...input_config} icon="lock" placeholder="Password" type="password" />
            <Form.Input
              {...input_config}
              icon="lock"
              placeholder="Confirm Password"
              type="password"
            />
          </Form.Group>
          <Form.Checkbox label="I agree to the Terms and Conditions" />
          <Button color="black" fluid size="large">
            Sign up
          </Button>
        </Form>

        <Divider content="-" horizontal />
      </Grid.Column>
    </Grid>
  );
}