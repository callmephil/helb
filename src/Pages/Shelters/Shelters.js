import React from 'react'
import { Container } from 'semantic-ui-react'
import PageHeadings from '../Components/PageHeadings'

export default function Shelters() {
    return (
        <Container style={{ padding: "4em 0em" }}>
        <PageHeadings
          title="Shelters"
          description={`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
                sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                est laborum.`}
        />
      </Container>
    )
}
