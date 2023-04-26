import axios from 'axios'
import React from 'react'

export default class BookInput extends React.Component {

    state ={
        // name: '',
        id: 0,
    }

    // handleChange = event => {
    //     this.setState({ name: event.target.value });
    // };
    
    handleChange = event => {
        this.setState({ id: event.target.value })
    }

    handleSubmit = event => {
        event.preventDefault();

        // const user = {
        //     name: this.state.name,
        // }

        // axios
        // .post(`https://jsonplaceholder.typicode.com/users`, { user })
        // .then(res => {
        //     console.log(res);
        //     console.log(res.data);
            
        // })

        axios
        .delete(`https://jsonplaceholder.typicode.com/users/${this.state.id}`)
        .then(res => {
            console.log(res);
            console.log(res.data);
            
        })
    }
   


  render() {
    return (
       <form onSubmit={this.handleSubmit}>
        <label>
            {/* Person Name:
            <input type="text" name="name" onChange={this.handleChange} /> */}
            Person ID:
        <input type="number" name="id" onChange={this.handleChange} /> 
        </label>
        {/* <button type='submit'>Add</button> */}
        <button type='submit'>Delete</button>
       </form>
      )
  }
}


