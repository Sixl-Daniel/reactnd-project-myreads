import React, { Component } from 'react';
import { Button, Card, Dimmer, Dropdown, Icon, Image, Header, Loader, Modal, Segment } from 'semantic-ui-react';

import * as CategoryHelper from '../utils/CategoryHelper';

class Shelve extends Component {

    getBookshelf() {
        return this.props.books.filter((book) => book.shelf === this.props.category);
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

                <Header inverted dividing as='h2'><Icon name={CategoryHelper.getIconByCategory(this.props.category)} />{this.props.title}</Header>

                <Card.Group centered>

                    {this.getBookshelf().map(book => (
                        <Card key={book.id}>
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
                                    )}.</p>
                                    <p>Published by <strong>“{book.publisher || 'Unknown'}”</strong> in {book.publishedDate.slice(0, 4)}.</p>
                                </Card.Description>
                            </Card.Content>
                            <Card.Content>
                                <Modal dimmer='blurring' trigger={<Button icon='arrow right' labelPosition='right' content='Show description' fluid />} closeIcon>
                                    <Modal.Header>Details</Modal.Header>
                                    <Modal.Content image scrolling className='align-items-start'>
                                        <Image size='medium' src={book.imageLinks.thumbnail}  />
                                        <Modal.Description>
                                            <Header>{book.title} {book.subtitle ? ' – ' + book.subtitle : '' }</Header>
                                            <p>{book.description}</p>
                                        </Modal.Description>
                                    </Modal.Content>
                                </Modal>
                            </Card.Content>
                            <Card.Content>
                                <Card.Description>
                                    <p><em>ISBN {book.industryIdentifiers[0].identifier}</em></p>
                                    <p><a href={book.previewLink} target='blank'><Icon name='google' /> Show on Google Books</a></p>
                                </Card.Description>
                            </Card.Content>
                            <Card.Content extra>
                                <Dropdown placeholder='Move this book to category &hellip;' fluid selection search options={CategoryHelper.categoriesConfig} ></Dropdown>
                            </Card.Content>
                        </Card>
                    ))}

                </Card.Group>

                {loadingIndicator}

            </Segment>
        );
    }
}

export default Shelve;
