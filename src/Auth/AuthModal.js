import React, { useState } from "react";
import { Modal, Menu } from "semantic-ui-react";
import LoginForm from "./Components/LoginForm";
import { isMobileOrTablet, isTablet } from "../Utils/ComponentHelpers";
import SignupForm from "./Components/SignupForm";

const getModalSize = () => (isTablet() ? "small" : "mini");

export default function AuthModal({ parent }) {
  const [open, setOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("signin");
  const handleItemClick = (e, { name }) => setActiveItem(name);

  return (
    <Modal
      closeIcon
      open={open}
      trigger={parent}
    //   dimmer="blurring"
      closeOnEscape={false}
      size={getModalSize()}
      onOpen={() => setOpen(true)}
      onClose={() => setOpen(false)}
      closeOnDimmerClick={isMobileOrTablet()}
      >
      <Modal.Content>
        <Menu inverted pointing size="huge" fixed="top" fluid widths={2}>
          <Menu.Item
            active={activeItem === "signin"}
            onClick={handleItemClick}
            name="signin"
            content="Sign in"
          />
          <Menu.Item
            active={activeItem === "signup"}
            onClick={handleItemClick}
            name="signup"
            content="Sign up"
          />
        </Menu>
      </Modal.Content>
      <Modal.Content>{activeItem === "signin" ? <LoginForm /> : <SignupForm />}</Modal.Content>
    </Modal>
  );
}
