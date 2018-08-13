import React, { Component } from 'react';
import { Button, Card, Dropdown, Icon, Image, Header, Modal } from 'semantic-ui-react';

import * as LibraryHelper from '../utils/LibraryHelper';
// import * as BooksAPI from '../api/BooksAPI';

class BookCard extends Component {

    render() {

        const book = this.props.book;

        const moveThisBook = (event, data) => {
            const newShelf = data.value;
            const oldShelf = data.defaultValue;
            const hasChanged = newShelf === oldShelf ? false : true;
            // console.log('Method moveThisBook() in BookCard.js was called:\n' + oldShelf + ' --> ' + newShelf + ' | changed: ' + hasChanged)

            if (hasChanged) {
                const shortBookObject = { id: book.id };
                //BooksAPI.update(shortBookObject, newShelf);
                this.props.onMoveBook(shortBookObject, newShelf, oldShelf);
                // console.log(shortBookObject);
            }
        }

        return (
            <Card>
                <Card.Content>
                    <Card.Header>{book.title}</Card.Header>
                    <Card.Meta>{book.subtitle}</Card.Meta>
                </Card.Content>
                <Card.Content>
                    <Card.Description>
                        <p>{book.pageCount} pages.</p>
                        <p>Written by {book.authors.map(
                            (author, index) => {
                                return index === 0 ?
                                    <strong key={'author-' + index}>“{author}”</strong> :
                                    <React.Fragment key={'author-' + index}> and <strong>“{author}”</strong></React.Fragment>
                            }
                        ) || '<em>unknown author</em>'}.</p>
                        <p>Published by <strong>“{book.publisher || 'Unknown'}”</strong> in {book.publishedDate.slice(0, 4)}.</p>
                    </Card.Description>
                </Card.Content>
                <Card.Content>
                    <Modal dimmer='blurring' trigger={<Button secondary icon='arrow right' labelPosition='right' content='Show description' fluid />} closeIcon>
                        <Modal.Header>Details</Modal.Header>
                        <Modal.Content image scrolling className='align-items-start'>
                            <Image size='medium' src={book.imageLinks.thumbnail} />
                            <Modal.Description>
                                <Header>{book.title} {book.subtitle ? ' – ' + book.subtitle : ''}</Header>
                                <p>{book.description}</p>
                            </Modal.Description>
                        </Modal.Content>
                    </Modal>
                </Card.Content>
                <Card.Content>
                    <Dropdown
                        placeholder='Move to another shelf&hellip;'
                        fluid
                        search
                        selection
                        options={LibraryHelper.getShelvesDropdownOptions(book.shelf)}
                        defaultValue={book.shelf}
                        onChange={moveThisBook}
                    />
                </Card.Content>
                <Card.Content extra>
                    <Card.Description>
                        <p><em>ISBN {book.industryIdentifiers[0].identifier}</em></p>
                        <p><a href={book.previewLink} target='blank'><Icon name='google' /> Show on Google Books</a></p>
                    </Card.Description>
                </Card.Content>
            </Card>
        )
    }
}

export default BookCard;
