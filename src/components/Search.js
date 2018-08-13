import React, { Component } from 'react';
import { Card, Dimmer, Icon, Header, Loader, Segment } from 'semantic-ui-react';
import BookCard from './BookCard';
// import * as LibraryHelper from '../utils/LibraryHelper';

class Search extends Component {


    getBooks() {
        return this.props.books;
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

        /*
         * TODO Implement search and add book
         */

            <Segment basic as='section' className='search'>

                <Header inverted dividing as='h2'><Icon name='search' />Search book by author or title</Header>

                <Card.Group centered>
                    {this.getBooks().map(book => (
                        <BookCard book={book} key={book.id} onMoveBook={this.props.onMoveBook} />
                    ))}
                </Card.Group>

                {loadingIndicator}

            </Segment>
        );
    }
}

export default Search;
