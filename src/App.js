import './App.css'
import axios from "axios";
import React from "react";
import Model from './components/Model';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from "react";

import BookList from './components/BookList';
import BookInput from './components/BookInput';
import Add from './components/Add';
import Data from './components/Data';


const API = "https://jsonplaceholder.typicode.com"
function App() {

  const [myData, setMyData] = useState([])
  const [isError, setIsError] = useState("");
  const [add, setAdd] = useState(false)
  const [username, setUsername] = useState('')

  const getApiData = async (url) => {
  try {
    const res = await axios.get(url)
  setMyData(res.data);
  } catch (error) {
    setIsError(error.message)
  }
  }

  useEffect(() => {
   getApiData(`${API}/posts`);
  }, []);

  // const addPost = async () => {
  //   const post = {title: "", body: "" };
  //   await axios.post("https://jsonplaceholder.typicode.com/posts" , post)
  //   setMyData([post, ...myData])
  // };

  const submit = () => {
    setAdd(true)
  }


   
  
  const handleUpdate = async (post) => {
    post.title = "Updated Title";
    await axios.put("https://jsonplaceholder.typicode.com/posts" + "/" + post.id);
    const postsClone = [...myData];
    const index = postsClone.indexOf(post);
    postsClone[index] = { ...post };
    setMyData(postsClone);
  };

  const handleDelete = async (post) => {
    await axios.delete("https://jsonplaceholder.typicode.com/posts" + "/" + post.id + post);
    setMyData(myData.filter((p) => p.id !== post.id));
  };


 return (
  <>
  <h1>Axios</h1>
  
  {/* <Add/> */}
  {/* <Data/> */}
  <hr></hr>
  {add == true && (<Model
       add={add}
       setAdd={setAdd}
      />)}
      <button onClick={submit}>Add Model</button>

      <hr></hr>

      {/* <button onClick={addPost}>ADD post</button> */}
     
   
   <div className="grid">
        {myData.slice(0,6).map((post) => {
          const { id, title, body } = post;
          return (
            <>
            <div className="card" key={id}>
              <h2>{title.slice(0, 15)}</h2>
              <p>{body.slice(0, 100)}</p>
              <button onClick={() => handleUpdate(post)}>
                Update
              </button>
              <button onClick={() => handleDelete(post)}>
                Delete
              </button>
            </div>
            </>
          )
        })}
    </div>
  </>
)
}

export default App;