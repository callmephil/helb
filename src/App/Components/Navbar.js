// @ts-nocheck
import _ from "lodash";
import React, { useState, Fragment } from "react";
import PropTypes from "prop-types";
import { createMedia } from "@artsy/fresnel";
import { NavLink } from "react-router-dom";
import { Visibility, Segment, Menu, Container, Button, Sidebar, Icon } from "semantic-ui-react";

const leftItems = [
  { to: "/", name: "Home", exact: true },
  { to: "/institutions", name: "Institutions" },
  { to: "/fundings", name: "Fundings" },
  { to: "/media", name: "Media Feed" },
  { to: "/missings", name: "Missings" },
  { to: "/volunteers", name: "Volunteers" },
  { to: "/shelters", name: "Shelters" },
];

const rightItems = [
  { to: "/profile", name: "Profile", style: { marginLeft: "0.3em" } },
  { to: "/login", name: "Login", style: { marginLeft: "0.3em" } },
  { to: "/register", name: "Register", style: { marginLeft: "0.3em" } },
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
              {_.map(leftItems, (item) => (
                <Menu.Item
                  as={NavLink}
                  key={item.name}
                  active={activeItem === item.name}
                  onClick={() => setActiveItem(item.name)}
                  {...item}
                />
              ))}

              <Menu.Menu position="right">
                {_.map(rightItems, (item) => (
                  <Menu.Item
                    as={NavLink}
                    key={item.name}
                    active={activeItem === item.name}
                    onClick={() => setActiveItem(item.name)}
                    {...item}
                  />
                ))}
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
          {_.map(leftItems, (item) => (
            <Menu.Item
              as={NavLink}
              key={item.name}
              active={activeItem === item.name}
              onClick={handleItemClick}
              {...item}
            />
          ))}
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
                  {_.map(rightItems, (item) => (
                    <Button as={NavLink} key={item.name} inverted {...item}>
                      {item.name}
                    </Button>
                  ))}
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
      <DesktopContainer>{children}</DesktopContainer>
    </MediaContextProvider>
    <MediaContextProvider>
      <MobileContainer>{children}</MobileContainer>
    </MediaContextProvider>
  </Fragment>
);

ResponsiveContainer.propTypes = {
  children: PropTypes.node,
};

export default ResponsiveContainer;
