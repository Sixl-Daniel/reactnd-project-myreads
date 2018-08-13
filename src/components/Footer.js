import React, { Component } from 'react';

import { Container, Image, Segment } from 'semantic-ui-react';

class Footer extends Component {
    render() {
        return (
            <Segment as='footer' vertical inverted id='footer-wrapper'>
                <Container textAlign='center' id='footer-content'>
                    <Image centered size='mini' src='/logo-book.svg' />
                    <p>&copy; 2018 Sixl</p>
                </Container>
            </Segment>
        );
    }
}

export default Footer;
