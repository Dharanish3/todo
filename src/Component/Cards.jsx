import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Dropdown from "react-bootstrap/Dropdown";

function Cards({ item, setItem, setShow }) {
  const handleDelete = (id) => {
    let index = 0;
    for (let i = 0; i < item.length; i++) {
      if (item[i].id === id) {
        index = i;
        break;
      }
    }

    let array = [...item];
    array.splice(index, 1);
    setItem(array);
  };

  return (
    <>
      <div className="container ">
        <h3>My Todos </h3>

        <br />
        <div className="row">
          {item.map((data) => {
            return (
              <div className="col-md-4"  key={data.id}>
              <Card
                style={{
                  display: "flex", // Add this line
                  flexDirection: "column",
                  width: "20rem",
                  height: "13rem",
                  backgroundColor: "#a9fcbf",
                }}
               
              >
                <Card.Body>
                  <Card.Title className="mb-2">
                    Title : {data.title}{" "}
                  </Card.Title>
                  <Card.Text className="mb-2">
                    Description : {data.description}
                  </Card.Text>
                  <Dropdown className="mb-2">
                    Status : &nbsp;
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                      Completed
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item href="#/action-1">Completed</Dropdown.Item>
                      <Dropdown.Item href="#/action-2">
                        Not Completed
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                  <div className="mt-auto">
                    <Button
                      variant="success"
                      className="mr-2"
                      onClick={() => setShow(true)}
                    >
                      Edit
                    </Button>{" "}
                    &nbsp;
                    <Button
                      variant="danger"
                      onClick={() => handleDelete(data.id)}
                    >
                      Delete
                    </Button>
                  </div>
                </Card.Body>
              </Card>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Cards;
