import React, { useState } from "react";
import { Modal, Menu } from "semantic-ui-react";
import LoginForm from "./Components/LoginForm";
import { isMobileOrTablet, isDesktop } from "../Utils/ComponentHelpers";
import SignupForm from "./Components/SignupForm";

export default function AuthModal({ parent }) {
  const [open, setOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("signin");
  const handleItemClick = (e, { name }) => setActiveItem(name);

  return (
    <Modal
      closeIcon={isDesktop()}
      open={open}
      trigger={parent}
      closeOnEscape={false}
      onOpen={() => setOpen(true)}
      onClose={() => setOpen(false)}
      closeOnDimmerClick={isMobileOrTablet()}
      style={{maxWidth: '450px', }}
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
