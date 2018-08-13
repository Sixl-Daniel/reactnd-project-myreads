import React, { Component } from 'react';

import { Container, Header, Dropdown, Image, Input, Menu } from 'semantic-ui-react';

class MenuTop extends Component {
    render() {
        return (
            <Menu as='header' fixed='top' inverted>
                <Container id='branding'>

                    <Menu.Item as='a' header>
                        <Image size='mini' src='/logo-book.svg' />
                        <Header inverted as='h1'>
                            MyReads
                            <Header.Subheader>A Book Tracking App</Header.Subheader>
                        </Header>
                    </Menu.Item>

                    {/* <Menu.Item as='a'>Home</Menu.Item> */}

                    {/* <Menu.Menu position='right'>
                        <Menu.Item>
                            <Input icon='search' placeholder='Search books&hellip;' />
                        </Menu.Item>
                    </Menu.Menu> */}

                </Container>
            </Menu>
        );
    }
}

export default MenuTop;
