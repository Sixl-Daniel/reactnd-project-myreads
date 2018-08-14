import React, { Component } from 'react';
import { Card, Header, Icon, Segment } from 'semantic-ui-react';
import BookCard from './BookCard';
import LoadingIndicator from './LoadingIndicator';
import * as LibraryHelper from '../utils/LibraryHelper';

class Shelve extends Component {

    render() {
        const {
            books,
            loading,
            shelf,
            title,
            onMoveBook
        } = this.props;

        const getBookshelf = () => {
            if (!shelf.length) {
                return books;
            } else {
                return books.filter((book) => book.shelf === shelf);
            }
        }

        const booksData = getBookshelf();

        if (!booksData.length) {
            return (
                <Segment basic as='section' className='shelve'>
                    <Header inverted dividing as='h2'><Icon name={LibraryHelper.getIconByShelfValue(shelf)} />{title} - empty</Header>
                    <Header inverted size='medium' content='There are no books in this shelf.' />
                    {loading === true && (<LoadingIndicator />)}
                </Segment>
            );
        } else {
            return (
                <Segment basic as='section' className='shelve'>
                    <Header inverted dividing as='h2'><Icon name={LibraryHelper.getIconByShelfValue(shelf)} />{title}</Header>
                    <Card.Group centered>
                        {booksData.map(book => (
                            <BookCard book={book} key={book.id} onMoveBook={onMoveBook} />
                        ))}
                    </Card.Group>
                    {loading === true && (<LoadingIndicator />)}
                </Segment>
            );
        }
    }
}

export default Shelve;
