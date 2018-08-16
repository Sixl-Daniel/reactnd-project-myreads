import React, { Component } from 'react';
import { Container, Header, Icon, Image, Segment } from 'semantic-ui-react';

class Footer extends Component {
    render() {
        return (
            <Segment as='footer' vertical inverted id='footer-wrapper'>
                <Container textAlign='center' id='footer-content'>
                    <Image centered size='mini' src='/logo-book.svg' />
                    <Header inverted as='h3'>MyReads – A Book Tracking App</Header>
                    <p><a href='https://github.com/Sixl-Daniel/reactnd-project-myreads' target='_blank' rel="noopener noreferrer"><Icon name='github' /> Show project on Github</a></p>
                    <p>&copy; 2018 Sixl</p>
                </Container>
            </Segment>
        );
    }
}

export default Footer;
