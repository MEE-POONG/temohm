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
                                <h1 className='fonthead fontsupersize' >Making You Happier Wiht Money You Make</h1>
                                <p className='fontsubtitle '>
                                    your business we will help build it to make maximum income low price and legit enjoy spending your money and feel rich beyond your imagination.
                                </p>
                                <p>
                                    <Button variant="outline-primary" className='button'>Read more</Button>
                                </p>


                            </Col>
                        </Row>
                        {data?.title}

                    </div>
                    <div className='img-profile'>

                        <Image src="https://i.imgur.com/jXXK5PJ.jpeg" className='imge' />

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
                                <Image src="https://i.imgur.com/gScbNnc.png" className="img" />
                                <h1 className='fontheader'>business</h1>

                                <p className='fontsub'>Sample text. Click to select the text box. Click again or double click to start editing the text.</p>
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
                        <h1 className='fontheader-get'>Simple prices, flexible    options & nothing hidden</h1>
                        <Row>
                            <Col>
                                <Alert className='fontsub-get bg-textget-1'>free</Alert>
                                <box className='box-opacity1'></box>
                                <p className='fontsubunder-get'>$0</p>
                                <li className='fontbody-get'>15 Users</li>
                                <li className='fontbody-get'>Feature 2</li>
                                <li className='fontbody-get'>Feature 3</li>
                                <li className='fontbody-get'>Feature 4</li>
                                <Button variant="outline-warning" className='button-get fontsub-get-button'>Get plan</Button>

                            </Col>
                            <Col>
                                <Alert className='fontsub-get bg-textget-2'>Individual</Alert>
                                <box className='box-opacity2'></box>
                                <p className='fontsubunder-get'>$29</p>
                                <li className='fontbody-get'>15 Users</li>
                                <li className='fontbody-get'>Feature 2</li>
                                <li className='fontbody-get'>Feature 3</li>
                                <li className='fontbody-get'>Feature 4</li>
                                <Button variant="outline-warning" className='button-get fontsub-get-button'>Get plan</Button>

                            </Col>
                            <Col>
                                <Alert className='fontsub-get bg-textget-3'>Business</Alert>
                                <box className='box-opacity3'></box>
                                <p className='fontsubunder-get'>$59</p>
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
                                <Image src="https://i.imgur.com/4pT78j0.jpeg" className='img-abput' />
                                <h1 className='font-head-about'>About Business</h1>
                                <h5 className='font-sub-about'>EFFECTIVE SOLUTIONS</h5>
                                <p className='font-sub-about'>Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition.
                                    Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.</p>

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
                                <h1 className='font-header-contact '>Contact  Us</h1>
                                <Button href='https://www.youtube.com/watch?v=FDyLViQhZUg' variant="light"><FaFacebookF className='icon-contact' /></Button>
                                <Button href='https://www.youtube.com/watch?v=FDyLViQhZUg' variant="light"><FaTwitter className='icon-contact' /></Button>
                                <Button href='https://www.youtube.com/watch?v=FDyLViQhZUg' variant="light"><BsInstagram className='icon-contact' /></Button>
                                <p>
                                    <box className='box-contact' >
                                        ⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛
                                    </box>
                                </p>
                                <h1 className='tel-contact'>0610678622</h1>
                                <h1>0869643287</h1>
                                
                            </Col>
                            <Col>


                            </Col>
                            <Col>
                                <Image src='https://i.imgur.com/zs58XSu.jpeg' className='img-contact' />
                                <p className='font-sub-underimg-contact'>
                                    MORBI CONVALLIS METUS EROS,
                                    SEMPER EFFICITUR AUCTOR. ETIAM SIT AMET CONVALLIS ERAT.
                                    CLASS APTENT TACITI SOCIOSQU AD LITORA TORQUENT PER CONUBIA! MAECENAS GRAVIDA LACUS NEC DOLOR SUSCIPIT FAUCIBUS.</p>
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
                                <Image src={data?.img} className='imge' />
                                <h1 className='fontsubtitle' >{data?.title}</h1>
                                <p className='fontsubtitle '>
                                    {data.description}
                                </p>
                            </Col>
                            <Col>


                            </Col>
                            <Col>
                            </Col>


                        </Row>
                    </div>
                </section>




            </Container>
            <p className='footer'>

                {data.tel}</p>

        </>
    );
}

