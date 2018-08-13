import React, { Component } from 'react';
import { Message, Segment, Icon } from 'semantic-ui-react';

class NotFound extends Component {

    render() {

        return (
            <Segment basic as='section' className='not-found'>
                <Message icon>
                    <Icon name='exclamation circle' />
                    <Message.Content>
                        <Message.Header>Page not found&hellip;</Message.Header>
                        What could have possibly gone wrong?
                    </Message.Content>
                </Message>
            </Segment>
        );

    }
}

export default NotFound;
