import React, { Component } from 'react';
import { Dimmer, Loader } from 'semantic-ui-react';

class LoadingIndicator extends Component {
    render() {
        return (
            <Dimmer active>
                <Loader size='small' content='Books are loading' />
            </Dimmer>
        );
    }
}

export default LoadingIndicator;
