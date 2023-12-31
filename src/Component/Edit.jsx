import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { useParams } from 'react-router-dom';

function Edit({ item, setItem, show, setShow }) {
  const params = useParams();
 
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const findIndex = (id) => {
    for (let i = 0; i < item.length; i++) {
      if (id === item[i].id) {
        return i;
      }
    }
  };

  const handleEdit = () => {
    let id = Number(params.id);
    let index = findIndex(id);
    let newArray = [...item];
    newArray.splice(index, 1, {
      id,
      title,
      description,
    });

    setItem(newArray);
    setShow(false);
    setTitle("");
    setDescription("");
  };

  const getData = () => {
    let id = Number(params.id);
    let index = findIndex(id);

    if (item && item.length > index) {
        setTitle(item[index].title);
        setDescription(item[index].description);
      }
  };

  // useEffect hook to fetch data when the component mounts
  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Edit</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control
                type="text"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                autoFocus
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Control
                as="textarea"
                type="text"
                placeholder="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="info" onClick={() => setShow(false)}>
            Close
          </Button>
          <Button variant="success" onClick={() => handleEdit()}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Edit;
