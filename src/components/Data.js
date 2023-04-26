import { BedroomBaby, BoyRounded } from '@mui/icons-material';
import axios from 'axios'
import React from 'react'

export default class Data extends React.Component {

    state ={
        titles: [],
        bodyes: [],
    }

    componentDidMount() {
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then(res => {
            console.log(res);
            this.setState({ titles: res.data });
        })
    }


  render() {
    return (
        <ul>
          {this.state.titles.map(title => (
            <>
            <li key={title.id}>
                {title.title}
            </li>
            </>
          ))}
          {this.state.bodyes.map(body => (
            <li key={body.id}>
                {body.body}
            </li>
          ))}
        </ul>
      )
  }
}


