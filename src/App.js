import React, { Component } from 'react';

import * as BooksAPI from './api/BooksAPI';

import { Container } from 'semantic-ui-react';

import MenuTop from './components/MenuTop';
import Shelve from './components/Shelve';
import Footer from './components/Footer';

import './App.css';

class App extends Component {
    state = {
        books: [],
        loading: false
    }

    componentWillMount() {
        this.setState({ loading: true })
    }

    componentDidMount() {
        BooksAPI.getAll().then((books) => {
            this.setState({books});
            this.setState({ loading: false });
            books.forEach(book => {
                console.log(book);
            });
        })
    }

    render() {
        return (
            <div className="app">
                <MenuTop />
                <Container as='main' id='content'>
                    <Shelve title='Currently Reading' books={this.state.books} category='currentlyReading' loading={this.state.loading} />
                    <Shelve title='Want to Read' books={this.state.books} category='wantToRead' loading={this.state.loading} />
                    <Shelve title='Read' books={this.state.books} category='read' loading={this.state.loading}/>
                </Container>
                <Footer />
            </div>
        );
    }
}

export default App;
