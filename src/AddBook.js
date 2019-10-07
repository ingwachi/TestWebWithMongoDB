import React, { Component } from 'react';
import axios from 'axios';
import { Button, Form, Label } from 'semantic-ui-react';

class AddBook extends Component {

    constructor() {
        super();
        this.state = {
            id: '',
            bookName: '',
            authorName: '',
        };
    }


    onChange = (e) => {
        const state = this.state
        state[e.target.name] = e.target.value;
        this.setState(state);
    }

    onSubmit = (e) => {
        e.preventDefault();

        const { id, bookName, authorName } = this.state;

        axios.post('/addBook', { id, bookName, authorName })
    }

    render() {
        const { id, bookName, authorName } = this.state;
        return (
            <div>
                <Form>
                    <Form.Field>
                        <label>Book ID</label>
                        <input placeholder='Book ID' name='id' value={id} onChange={this.onChange}/>
                    </Form.Field>
                    <Form.Field>
                        <label>Book Name</label>
                        <input placeholder='Book Name' name='bookName' value={bookName} onChange={this.onChange}/>
                    </Form.Field>
                    <Form.Field>
                        <label>Author</label>
                        <input placeholder='Author' name='authorName' value={authorName} onChange={this.onChange}/>
                    </Form.Field>
                    <Button type='submit' onClick={this.onSubmit}>Submit</Button>
                </Form>
            </div>
        );
    }
}

export default AddBook;