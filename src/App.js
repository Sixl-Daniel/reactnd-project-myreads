import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Container } from 'semantic-ui-react';

import * as BooksAPI from './api/BooksAPI';
import MenuTop from './components/MenuTop';
import Shelve from './components/Shelve';
import Search from './components/Search';
import NotFound from './components/NotFound';
import Footer from './components/Footer';

import './App.css';

class App extends Component {
    state = {
        books: [],
        count: 0,
        loading: true
    }

    getAllBooks() {
        this.setState({
            loading: true
        });

        BooksAPI.getAll().then(books => {
            this.setState({
                books: books,
                count: books.length,
                loading: false
            });
            // console.log(books);
            // console.log(this.state.count);
        })
    }

    moveBook(shortBookObject, newShelf, oldShelf) {

        /*
         * TODO Implement move book
         */

    }

    componentDidMount() {
        this.getAllBooks();
    }

    render() {
        return (
            <div className="app">
                <MenuTop />
                <Switch>
                    <Route exact path='/' render={() => (
                        <Container as='main' id='content' className='content content--home'>
                            <Shelve title='Currently Reading' books={this.state.books} shelf='currentlyReading' loading={this.state.loading} onMoveBook={this.moveBook} />
                            <Shelve title='Want to Read' books={this.state.books} shelf='wantToRead' loading={this.state.loading} onMoveBook={this.moveBook} />
                            <Shelve title='Read' books={this.state.books} shelf='read' loading={this.state.loading} onMoveBook={this.moveBook} />
                        </Container>
                    )}/>
                    <Route exact path='/search' render={() => (
                        <Container as='main' id='content' className='content content--search'>
                            <Search books={this.state.books} loading={this.state.loading} onMoveBook={this.moveBook}/>
                        </Container>
                    )} />
                    <Route exact path='/404' render={() => (
                        <Container as='main' id='content' className='content content--not-found'>
                            <NotFound />
                        </Container>
                    )} />
                    <Redirect from='*' to='/404' />
                </Switch>
                <Footer />
            </div>
        );
    }
}

export default App;
