import { Button, OverlayTrigger, Tooltip, Row, Col, Image, Container, Table, box, Alert, } from 'react-bootstrap';
import { GrDiamond } from 'react-icons/gr';
import axios from 'axios';
// import IndexPage from "../layouts/IndexPage.js";
import React, { useState, useEffect } from 'react';
import Footer from '../../components/Footers/Footer';
import { BsFacebook, BsInstagram } from 'react-icons/bs';
import { FaTwitter, FaFacebookF } from 'react-icons/fa';

export default function ohm() {
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
            <Container className='my-5 '>
                <section className='bgset-998'>



                    <div className='anotherbackground'>

                        <Row>
                            <Col>

                            </Col>
                            <Col>
                                <h1 className='fonthead fontsupersize' >{data?.title}</h1>
                                <p className='fontsubtitle '>
                                    {data.description}
                                </p>
                                <p>
                                    <Button variant="outline-primary" className='button'>Read more</Button>
                                </p>


                            </Col>
                        </Row>
                        {data?.title}

                    </div>
                    <div className='img-profile'>

                        <Image src={data?.img} className='imge' />

                    </div>
                    <div className='img-bg'>
                        <Image src="https://i.imgur.com/SRvOobE.png" className='imgbg' />

                    </div>
                </section>
                {/* index */}
                {/* Business */}
                <section className='bgset-998 bg'>



                    <div className=''>

                        <Row>
                            <Col>

                            </Col>
                            <Col>
                                <Image src={data.img2} className="img" />
                                <h1 className='fontheader'>{data?.title2}</h1>

                                <p className='fontsub'>{data.description2}</p>
                            </Col>
                            <Col>

                            </Col>

                        </Row>


                    </div>
                    <div className='img-profile'>


                    </div>
                    <div className='img-bg'>


                    </div>
                </section>
                {/* /Business */}
                {/* Getplan */}
                <section className='bgset-998 bg-gp'>



                    <div className=''>
                        <h1 className='fontheader-get'>{data.title3}</h1>
                        <Row>
                            <Col>
                                <Alert className='fontsub-get bg-textget-1'>free</Alert>
                                <box className='box-opacity1'></box>
                                <p className='fontsubunder-get'>${data.price3_1}</p>
                                <li className='fontbody-get'>15 Users</li>
                                <li className='fontbody-get'>Feature 2</li>
                                <li className='fontbody-get'>Feature 3</li>
                                <li className='fontbody-get'>Feature 4</li>
                                <Button variant="outline-warning" className='button-get fontsub-get-button'>Get plan</Button>

                            </Col>
                            <Col>
                                <Alert className='fontsub-get bg-textget-2'>Individual</Alert>
                                <box className='box-opacity2'></box>
                                <p className='fontsubunder-get'>${data.price3_2}</p>
                                <li className='fontbody-get'>15 Users</li>
                                <li className='fontbody-get'>Feature 2</li>
                                <li className='fontbody-get'>Feature 3</li>
                                <li className='fontbody-get'>Feature 4</li>
                                <Button variant="outline-warning" className='button-get fontsub-get-button'>Get plan</Button>

                            </Col>
                            <Col>
                                <Alert className='fontsub-get bg-textget-3'>Business</Alert>
                                <box className='box-opacity3'></box>
                                <p className='fontsubunder-get'>${data.price3_3}</p>
                                <li className='fontbody-get'>15 Users</li>
                                <li className='fontbody-get'>Feature 2</li>
                                <li className='fontbody-get'>Feature 3</li>
                                <li className='fontbody-get'>Feature 4</li>
                                <Button variant="outline-warning" className='button-get fontsub-get-button'>Get plan</Button>

                            </Col>



                        </Row>
                    </div>
                </section>
                {/* /Getplan */}
                {/* Aboutbusiness */}
                <section className='bgset-998'>



                    <div className=''>
                        <h1 className=''></h1>
                        <Row>
                            <Col>

                            </Col>
                            <Col>
                                <Image src={data.img4} className='img-abput' />
                                <h1 className='font-head-about'>{data.title4} </h1>
                                <h5 className='font-sub-about'>EFFECTIVE SOLUTIONS</h5>
                                <p className='font-sub-about'>{data.undertitle4}</p>

                            </Col>
                            <Col>

                            </Col>



                        </Row>
                    </div>
                </section>
                {/* /Aboutbusiness */}
                {/* CONTACT US */}
                <section className='bgset-998 '>



                    <div className='fame'>
                        <h1 className=''></h1>
                        <Row>
                            <Col>
                                <h1 className='font-header-contact '>{data.header5}</h1>
                                <Button href='https://www.youtube.com/watch?v=FDyLViQhZUg' variant="light" className='but-contact'><FaFacebookF className='icon-contact' /></Button>
                                <Button href='https://www.youtube.com/watch?v=FDyLViQhZUg' variant="light" className='but-contact'><FaTwitter className='icon-contact' /></Button>
                                <Button href='https://www.youtube.com/watch?v=FDyLViQhZUg' variant="light" className='but-contact'><BsInstagram className='icon-contact' /></Button>
                                <p>
                                    <box className='box-contact' >
                                        ⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛
                                    </box>
                                </p>
                                <h1 className='tel-contact'>{data.tel5}</h1>
                                <h1>{data.tel5}</h1>

                            </Col>
                            <Col>


                            </Col>
                            <Col>
                                <Image src={data.img5} className='img-contact' />
                                <p className='font-sub-underimg-contact'>
                                {data.description5}</p>
                            </Col>
                            <Col>

                            </Col>
                            <Col>

                            </Col>
                            <Col>

                            </Col>


                        </Row>
                    </div>
                </section>
                {/* /CONTACT US */}
                <section className='bgset-998'>



                    <div className=''>
                        <h1 className=''></h1>
                        <Row>
                            <Col>

                            </Col>
                            <Col>
                                <Image src={data.img5} className='img-abput' />

                                <h1 className='font-head-about'>{data.header5}</h1>
                                <p className='font-sub-about'>{data.tel5}</p>

                                <p className='font-sub-about'>{data.description5}</p>

                            </Col>
                            <Col>
                            </Col>


                        </Row>
                    </div>
                </section>




            </Container>
            <p className='footer'>

                {data.credit}</p>

        </>
    );
}

