import React, { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Model({add, setAdd}) {
  const handleClose = () => setAdd(false);
  
  const [addPost, setAddPost] = useState({
    title: "",
    body: "",
  });

  const changes = (event) => {
    console.log(event.target.value);
    console.log(event.target.name);

    // const value = event.target.value;
    // const name = event.target.name;
    const {value, name} = event.target;

    setAddPost((preValue) => {
      // console.log(preValue)

       return {
        ...preValue,
        [name]: value,
       }

      // if (name === "title") {
      //   return {
      //     title: value,
      //     body: preValue.body,
      //   };
      // } else if (name === "body") {
      //   return {
      //     title: preValue.title,
      //     body: value,
      //   };
      // }
    })
  }
  
  const onSubmits = (event) => {
    event.preventDefault();
    // alert("form submitted");
    // setAddPost(addPost.title)
    console.log(onSubmits)
  }
 
  return (
    <>
        <Modal show={add} onHide={handleClose}>
          <Modal.Header closeButton></Modal.Header>
          <Modal.Body> 
            <Form onSubmit={onSubmits}>
              <input name="title" onChange={changes} value={addPost.title} type='text' placeholder='title' /> 
              <input name="body" onChange={changes} value={addPost.body} type='text' placeholder='body' /> 
              <h6>{addPost.title} {addPost.body}</h6>
              <Button variant="primary">add</Button>
            </Form>
          </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>Close</Button>
          <Button variant="primary" onClick={handleClose}>submit</Button>
        </Modal.Footer>
      </Modal> 
    </>
  );
}

export default Model;