import { Container, Form, Button, Navbar, Footer } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import axios from 'axios';
import React, { useState, useEffect } from 'react';


function admin() {
  const [data, setData] = useState({
    img: "",
    title: "",
    description: "",
    tel:"",
  });

  useEffect(() => {
    getData()
  }, [])

  const getData = async () => {
    const res = await axios({
      method: "GET",
      url: "/api/banner-home",
    });

    setData(res.data);
  };
  return (
    <>
      <Container>
        <Form>
          <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Label>img</Form.Label>
            <Form.Control type="email" placeholder="Enter email" value={data.img} onChange={(e) => { setData({ ...data, img: e.target.value }) }} />
          </Form.Group>

        </Form>
        <Form>
          <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Label>title</Form.Label>
            <Form.Control type="email" placeholder="Enter email"
              value={data.title}
              onChange={(e) => {
                setData({ ...data, title: e.target.value })
              }} />
          </Form.Group>

        </Form>
        <Form>
          <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Label>description</Form.Label>
            <Form.Control type="email" placeholder="Enter email" value={data.description} onChange={(e) => { setData({ ...data, description: e.target.value }) }} />
          </Form.Group>

        </Form>
        <Form>
          <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Label>tel</Form.Label>
            <Form.Control type="email" placeholder="Enter email" value={data.tel} onChange={(e) => { setData({ ...data, tel: e.target.value }) }} />
          </Form.Group>

        </Form>
        <Button variant="outline-primary" onClick={async () => {
          if (data._id) {
            await axios({
              method: "PUT",
              data,
              url: "/api/banner-home/" + data._id
            });
          }
          else {
            await axios({
              method: "POST",
              data,
              url: "/api/banner-home/"
            });
          }
        }}>เพิ่ม</Button>
        <Table striped bordered hover>
          <thead>
            <tr>

            </tr>
          </thead>
          <tbody>
            <tr>

              {/* <th><Button variant="outline-success">แก้ไข</Button></th> */}
            </tr>
            <tr>

              {/* <th><Button variant="outline-success">แก้ไข</Button></th> */}
            </tr>
            <tr>

              {/* <th><Button variant="outline-success">แก้ไข</Button></th> */}
            </tr>
          </tbody>
        </Table>
      </Container>
      <p className='footer'>

        {data.tel}</p>

    </>

  );
}

export default admin;