import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Header, Icon, Image, Menu } from 'semantic-ui-react';

class MenuTop extends Component {
    render() {
        return (
            <Menu as='header' fixed='top' inverted>
                <Container id='branding'>
                    <Menu.Item as={Link} to='/' header>
                        <Image size='mini' src='/logo-book.svg' />
                        <Header inverted as='h1'>
                            MyReads
                            <Header.Subheader>A Book Tracking App</Header.Subheader>
                        </Header>
                    </Menu.Item>
                    <Menu.Menu position='right'>
                        <Menu.Item as={Link} to='/'><Icon name='home' /> Home</Menu.Item>
                        <Menu.Item as={Link} to='/search'><Icon name='find' /> Search for new books</Menu.Item>
                    </Menu.Menu>
                </Container>
            </Menu>
        );
    }
}

export default MenuTop;
