import { Container, Form, Button, Navbar, Footer } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import axios from 'axios';
import React, { useState, useEffect } from 'react';


function admin() {
  const [data, setData] = useState({
    img: "",
    title: "",
    description: "",
    credit: "",
    img2: "",
    title2: "",
    descriotion2: "",
    title3: "",
    price3_1: "",
    price3_2: "",
    price3_3: "",
    img4: "",
    title4: "",
    undertitle4: "",
    header5: "",
    tel5: "",
    img5: "",
    descriotion5: "",

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
            <Form.Label>img-1</Form.Label>
            <Form.Control type="email" placeholder="Enter img1"
              value={data.img} onChange={(e) => {
                setData({ ...data, img: e.target.value })
              }} />
          </Form.Group>

        </Form>
        <Form>
          <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Label>title-1</Form.Label>
            <Form.Control type="email" placeholder="Enter title1"
              value={data.title} onChange={(e) => {
                setData({ ...data, title: e.target.value })
              }} />
          </Form.Group>

        </Form>

        <Form>
          <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Label>description-1</Form.Label>
            <Form.Control type="email" placeholder="Enter description1"
              value={data.description} onChange={(e) => {
                setData({ ...data, description: e.target.value })
              }} />
          </Form.Group>

        </Form>

        <Form>
          <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Label>img-2</Form.Label>
            <Form.Control type="email" placeholder="Enter img2"
              value={data.img2} onChange={(e) => {
                setData({ ...data, img2: e.target.value })
              }} />
          </Form.Group>
        </Form>

        <Form>

          <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Label>title-2</Form.Label>
            <Form.Control type="email" placeholder="Enter title2"
              value={data.title2} onChange={(e) => {
                setData({ ...data, title2: e.target.value })
              }} />
          </Form.Group>
        </Form>

        <Form>
          <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Label>description-2</Form.Label>
            <Form.Control type="email" placeholder="Enter description2"
              value={data.description2} onChange={(e) => {
                setData({ ...data, description2: e.target.value })
              }} />
          </Form.Group>
        </Form>

        <Form>

          <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Label>title-3</Form.Label>
            <Form.Control type="email" placeholder="Enter title3"
              value={data.title3} onChange={(e) => {
                setData({ ...data, title3: e.target.value })
              }} />
          </Form.Group>
        </Form>
        
        <Form>

          <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Label>price-3-1</Form.Label>
            <Form.Control type="email" placeholder="Enter price3-1"
              value={data.price3_1} onChange={(e) => {
                setData({ ...data, price3_1: e.target.value })
              }} />
          </Form.Group>
        </Form>
        
        <Form>

          <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Label>price-3-2</Form.Label>
            <Form.Control type="email" placeholder="Enter price3-2"
              value={data.price3_2} onChange={(e) => {
                setData({ ...data, price3_2: e.target.value })
              }} />
          </Form.Group>
        </Form>
        
        <Form>

          <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Label>price-3-3</Form.Label>
            <Form.Control type="email" placeholder="Enter price3-3"
              value={data.price3_3} onChange={(e) => {
                setData({ ...data, price3_3: e.target.value })
              }} />
          </Form.Group>
        </Form>

        <Form>
          <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Label>img-4</Form.Label>
            <Form.Control type="email" placeholder="Enter img4"
              value={data.img4} onChange={(e) => {
                setData({ ...data, img4: e.target.value })
              }} />
          </Form.Group>
        </Form>

        <Form>
          <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Label>title-4</Form.Label>
            <Form.Control type="email" placeholder="Enter title4"
              value={data.title4} onChange={(e) => {
                setData({ ...data, title4: e.target.value })
              }} />
          </Form.Group>
        </Form>
        
        <Form>
          <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Label>undertitle4</Form.Label>
            <Form.Control type="email" placeholder="Enter undertitle4"
              value={data.undertitle4} onChange={(e) => {
                setData({ ...data, undertitle4: e.target.value })
              }} />
          </Form.Group>
        </Form>
        
        <Form>
          <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Label>header-5</Form.Label>
            <Form.Control type="email" placeholder="Enter header5"
              value={data.header5} onChange={(e) => {
                setData({ ...data, header5: e.target.value })
              }} />
          </Form.Group>
        </Form>
        
        <Form>
          <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Label>tel-5</Form.Label>
            <Form.Control type="email" placeholder="Enter tel5"
              value={data.tel5} onChange={(e) => {
                setData({ ...data, tel5: e.target.value })
              }} />
          </Form.Group>
        </Form>

        <Form>
          <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Label>img-5</Form.Label>
            <Form.Control type="email" placeholder="Enter img5"
              value={data.img5} onChange={(e) => {
                setData({ ...data, img5: e.target.value })
              }} />
          </Form.Group>
        </Form>
        
        <Form>
          <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Label>description-5</Form.Label>
            <Form.Control type="email" placeholder="Enter description5"
              value={data.description5} onChange={(e) => {
                setData({ ...data, description5: e.target.value })
              }} />
          </Form.Group>
        </Form>

        <Form>
          <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Label>credit</Form.Label>
            <Form.Control type="email" placeholder="Enter creditfooter"
              value={data.credit} onChange={(e) => {
                setData({ ...data, credit: e.target.value })
              }} />
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