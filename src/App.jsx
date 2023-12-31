import React, { useState } from 'react'
import Add from './Component/Add'
import Cards from './Component/Cards'
import Edit from './Component/Edit'

function App() {
  const [show, setShow] = useState(false);

  const [item , setItem] = useState([
    {
      id: 1,
      title: "Data Science",
      description: "Lorem ipsum dolor sit amet",
    },
    {
      id: 2,
      title: "Machine Learning",
      description: "Lorem ipsum dolor sit amet",
    },
    {
      id: 3,
      title: "Automation",
      description: "Lorem ipsum dolor sit amet",
    },
  ]);

  return (
    <>
       <Add item ={item} setItem ={setItem}/> 
       <Cards item ={item} setItem ={setItem} show ={show} setShow={setShow} />
       <Edit item ={item} setItem ={setItem} show={show} setShow={setShow} />
       
    </>
  )
}

export default App