import { Button, OverlayTrigger, Tooltip, Row, Col, Image, Container, Table, box, Alert } from 'react-bootstrap';
import { GrDiamond } from 'react-icons/gr';


function Index() {
    return (

        <Container className='my-5 '>
            <section className='bgset-998'>



                <div className='anotherbackground'>

                    <Row>
                        <Col>

                        </Col>
                        <Col>
                            <h1 className='fonthead fontsupersize' >Making You Happier Wiht Money You Maked</h1>
                            <p className='fontsubtitle '>
                                your business we will help build it to make maximum income low price and legit enjoy spending your money and feel rich beyond your imagination.
                            </p>
                            <p>
                                <Button variant="outline-primary" className='button'>Read more</Button>
                            </p>


                        </Col>
                    </Row>


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
                            <Alert className='fontsub-get bg-text'>free</Alert>
                            <box className='box-opacity1'></box>
                            <p className='fontsubunder-get'>$0</p>
                            <li className='fontbody-get'>15 Users</li>
                            <li className='fontbody-get'>Feature 2</li>
                            <li className='fontbody-get'>Feature 3</li>
                            <li className='fontbody-get'>Feature 4</li>
                            <Button variant="outline-warning" className='button-get fontsub-get-button'>Get plan</Button>

                        </Col>
                        <Col>
                            <Alert className='fontsub-get bg-text'>Individual</Alert>
                            <box className='box-opacity2'></box>
                            <p className='fontsubunder-get'>$29</p>
                            <li className='fontbody-get'>15 Users</li>
                            <li className='fontbody-get'>Feature 2</li>
                            <li className='fontbody-get'>Feature 3</li>
                            <li className='fontbody-get'>Feature 4</li>
                            <Button variant="outline-warning" className='button-get fontsub-get-button'>Get plan</Button>

                        </Col>
                        <Col>
                            <Alert className='fontsub-get bg-text'>Business</Alert>
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
                            <p>i love hee</p>

                        </Col>
                        <Col>
                           
                        </Col>



                    </Row>
                </div>
            </section>
            {/* /Aboutbusiness */}
            {/* CONTACT US */}
            <section className='bgset-998'>



                <div className=''>
                    <h1 className=''></h1>
                    <Row>
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
        </Container>

    );
}

export default Index;