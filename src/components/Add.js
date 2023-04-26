import axios from 'axios'
import React from 'react'


export default class Add extends React.Component {
   

    state = {
        title: '',
        body: '',
    }

    handleChange = event => {
        this.setState({ title: event.target.value })
    };

    handleBody = event => {
        this.setState({ body: event.target.value });
    };
    
    handleSubmit = event => {
        event.preventDefault();

        const posts = {
            title: this.state.title,
            body: this.state.body,
        }

        axios
        .post(`https://jsonplaceholder.typicode.com/posts`, { posts })
        .then(res => {
            console.log(res);
            console.log(res.data);;         
        })
    }
   


  render() {
    return (
       <form onSubmit={this.handleSubmit}>
        <label>
            Title:
            <input type="text" title='title' onChange={this.handleChange} />
            Body:
            <input type="text" body='body' onChange={this.handleBody} />
        </label>
        <button type='submit'>Add</button>
       </form>
      )
  }
}


