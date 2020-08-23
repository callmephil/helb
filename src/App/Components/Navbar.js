// @ts-nocheck
import _ from "lodash";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import React, { useState, Fragment } from "react";
import { createMedia } from "@artsy/fresnel";
import AuthModal from "../../Auth/AuthModal";
import {
  Visibility,
  Segment,
  Menu,
  Container,
  Button,
  Sidebar,
  Icon,
  Dropdown,
} from "semantic-ui-react";

const leftItems = [
  { to: "/", name: "Home", exact: true },
  { to: "/institutions", name: "Institutions" },
  { to: "/fundings", name: "Fundings" },
  { to: "/media", name: "Media Feed" },
  { to: "/memorial", name: "Memorial" },
];

const rightItems = [
  {
    to: "/services",
    name: "Services",
    sub: [
      { to: "/services/health", name: "Health Care" },
      { to: "/services/renovation", name: "Renovations" },
      { to: "/services/housing", name: "Housing" },
    ],
  },
  { to: "/profile", name: "Profile", style: { marginRight: "0.6em" } },
  // { to: "/login", name: "Login", style: { marginLeft: "0.3em" } },
  // { to: "/register", name: "Register", style: { marginLeft: "0.3em" } },
];

const { MediaContextProvider, Media } = createMedia({
  breakpoints: {
    mobile: 0,
    tablet: 768,
    computer: 1024,
  },
});

/* Heads up!
 * Neither Semantic UI nor Semantic UI React offer a responsive navbar, however, it can be implemented easily.
 * It can be more complicated, but you can create really flexible markup.
 */
function DesktopContainer({ children }) {
  const [activeItem, setActiveItem] = useState("");
  const [fixedMenu, setFixedMenu] = useState(false);

  return (
    <Media greaterThan="tablet">
      <Visibility
        once={false}
        onBottomPassed={() => setFixedMenu(true)}
        onBottomPassedReverse={() => setFixedMenu(false)}>
        <Segment inverted textAlign="center" style={{ padding: "1em 0em" }} vertical>
          <Menu
            fixed={fixedMenu ? "top" : null}
            inverted={!fixedMenu}
            pointing={!fixedMenu}
            secondary={!fixedMenu}
            size="large">
            <Container>
              {_.map(leftItems, (item) => {
                return (
                  <Menu.Item
                    as={NavLink}
                    key={item.name}
                    active={activeItem === item.name}
                    onClick={() => setActiveItem(item.name)}
                    {...item}
                  />
                );
              })}

              <Menu.Menu position="right">
                {_.map(rightItems, (item) => {
                  if (item?.sub) {
                    return (
                      <Dropdown item text={item.name}>
                        <Dropdown.Menu>
                          {_.map(item.sub, (sub) => (
                            <Dropdown.Item
                              as={NavLink}
                              key={sub.name}
                              active={activeItem === sub.name}
                              onClick={() => setActiveItem(sub.name)}
                              {...sub}
                              content={sub.name}
                            />
                          ))}
                        </Dropdown.Menu>
                      </Dropdown>
                    );
                  } else
                    return (
                      <Menu.Item
                        as={NavLink}
                        key={item.name}
                        active={activeItem === item.name}
                        onClick={() => setActiveItem(item.name)}
                        {...item}
                      />
                    );
                })}
                <AuthModal parent={<Menu.Item content="Sign-In" />} />
              </Menu.Menu>
            </Container>
          </Menu>
        </Segment>
      </Visibility>

      {children}
    </Media>
  );
}

DesktopContainer.propTypes = {
  children: PropTypes.node,
};

function MobileContainer({ children }) {
  const [activeItem, setActiveItem] = useState("Home");
  const [visible, setVisible] = useState(false);

  const handleItemClick = (e, { name }) => {
    setActiveItem(name);
    handleSidebarHide();
  };

  const handleSidebarHide = () => setVisible(false);
  const handleToggle = () => setVisible(true);

  return (
    <Media as={Sidebar.Pushable} lessThan="computer">
      <Sidebar.Pushable>
        <Sidebar
          as={Menu}
          animation="overlay"
          inverted
          onHide={handleSidebarHide}
          vertical
          visible={visible}>
          {_.map(leftItems, (item) => {
            return (
              <Menu.Item
                as={NavLink}
                key={item.name}
                active={activeItem === item.name}
                onClick={() => setActiveItem(item.name)}
                {...item}
              />
            );
          })}
        </Sidebar>

        <Sidebar.Pusher dimmed={visible}>
          <Segment
            inverted
            textAlign="center"
            style={{ alignBaseline: "center", padding: "1em 0em" }}
            vertical>
            <Container>
              <Menu inverted pointing secondary size="tiny">
                <Menu.Item onClick={handleToggle}>
                  <Icon size="large" name="sidebar" />
                </Menu.Item>
                <Menu.Item position="right">
                  {_.map(rightItems, (item) => {
                    if (item?.sub) {
                      return (
                        <Dropdown item text={item.name}>
                          <Dropdown.Menu>
                            {_.map(item.sub, (sub) => (
                              <Dropdown.Item
                                as={NavLink}
                                key={sub.name}
                                active={activeItem === sub.name}
                                onClick={handleItemClick}
                                {...sub}
                                content={sub.name}
                              />
                            ))}
                          </Dropdown.Menu>
                        </Dropdown>
                      );
                    } else
                      return (
                        <Button
                          as={NavLink}
                          key={item.name}
                          inverted
                          {...item}
                          onClick={handleItemClick}>
                          {item.name}
                        </Button>
                      );
                  })}
                  <AuthModal parent={<Button inverted content="Sign-In" />} />
                </Menu.Item>
              </Menu>
            </Container>
          </Segment>

          {children}
        </Sidebar.Pusher>
      </Sidebar.Pushable>
    </Media>
  );
}

MobileContainer.propTypes = {
  children: PropTypes.node,
};

const ResponsiveContainer = ({ children }) => (
  /* Heads up!
   * For large applications it may not be best option to put all page into these containers at
   * they will be rendered twice for SSR.
   */
  <Fragment>
    <MediaContextProvider>
      <DesktopContainer children={children} />
    </MediaContextProvider>
    <MediaContextProvider>
      <MobileContainer children={children} />
    </MediaContextProvider>
  </Fragment>
);

ResponsiveContainer.propTypes = {
  children: PropTypes.node,
};

export default ResponsiveContainer;
