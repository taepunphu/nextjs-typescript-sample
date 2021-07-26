import { observer } from 'mobx-react-lite'
import React from 'react'
import { Menu, Container, Button } from 'semantic-ui-react'

export const NavBar: React.FC = () => {
  return (
    <Menu fixed='top' inverted>
      <Container>
        <Menu.Item header>
          Reactivities
        </Menu.Item>
        <Menu.Item name='Activities' />
        <Menu.Item>
          <Button
            positive
            content='Create Activity'
          ></Button>
        </Menu.Item>
      </Container>
    </Menu>
  )
}

export default observer(NavBar)
