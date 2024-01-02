import React,{useState} from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';



function Add({item,setItem}) {

  const [title , setTitle] = useState('')
  const [description , setDescription] = useState('')

  const handleClick = () => {
    let id = item.length?item[item.length-1].id+1 : 1
    let array = [...item]
    array.push({
      id,
      title,
      description
    })
    setItem(array)
    setTitle("");
    setDescription("");
  }


  return (
    <>
      <div className="container">
      <h5 className="text-center ">My Todo</h5>
      <br />
        <Form className="d-flex">
          <Form.Group className="mb-3 col-5" controlId="formBasicEmail">
            <Form.Control type="text" placeholder="Title" onChange={(e) => setTitle(e.target.value)} required />
          </Form.Group>

          &nbsp;
          &nbsp;



          <Form.Group className="mb-3 col-5" controlId="formBasicPassword">
            <Form.Control type="text" placeholder="Description"  onChange={(e) => setDescription(e.target.value)} required />
          </Form.Group>
          &nbsp;
          &nbsp;

          
          <Button variant="primary" onClick ={() => handleClick()}>Add</Button>
        </Form>
      </div>
      <br />
    </>
  );
}

export default Add;
