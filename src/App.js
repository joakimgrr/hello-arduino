import React, { Component } from 'react';
import request from 'superagent';

export default class App extends Component {
    constructor() {
        super();

        this.setMessage = this.setMessage.bind(this);
    }
    setMessage() {
        if (this.textInput !== null) {
            request
                .post('/api/message')
                .send({message: this.textInput.value})
                .end((err, res) => {
                    console.log('sent!')
                });
        }
    }

    render() {
        return (
            <div className="col-md-offset-3 col-md-6">
                <h1> Insert message: </h1>
                <div className="input-group">
                    <input type="text" className="form-control" placeholder="Text..." ref={(ref) => this.textInput = ref}/>
                    <span className="input-group-btn">
                        <button onClick={this.setMessage} className="btn btn-primary" type="button">Set text</button>
                    </span>
                </div>
            </div>
        );
    }
}
