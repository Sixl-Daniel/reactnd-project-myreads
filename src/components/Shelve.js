import React, { Component } from 'react';
import { Card, Dimmer, Header, Icon, Loader, Segment } from 'semantic-ui-react';
import BookCard from './BookCard';
import * as LibraryHelper from '../utils/LibraryHelper';

class Shelve extends Component {

    getBookshelf() {
        if (this.props.shelf.length) {
            return this.props.books.filter((book) => book.shelf === this.props.shelf);
        } else {
            return this.props.books;
        }
    }

    render() {

        let loadingIndicator;

        if (this.props.loading === true) {
            loadingIndicator =
            <Dimmer active>
                <Loader content='Books are loading' />
            </Dimmer>;
        } else {
            loadingIndicator = '';
        }

        return (
            <Segment basic as='section' className='shelve'>
                <Header inverted dividing as='h2'><Icon name={LibraryHelper.getIconByShelfValue(this.props.shelf)} />{this.props.title}</Header>
                <Card.Group centered>
                    {this.getBookshelf().map(book => (
                        <BookCard book={book} key={book.id} onMoveBook={this.props.onMoveBook} />
                    ))}
                </Card.Group>
                {loadingIndicator}
            </Segment>
        );

    }
}

export default Shelve;
